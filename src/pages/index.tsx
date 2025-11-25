import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';
import { JSX, useState, useEffect } from 'react';

// SVG Icon Components
function ZapIcon() {
  return (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KeyboardIcon() {
  return (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <Heading as="h1" className="hero__title">
              <span>{siteConfig.title}</span>
            </Heading>
            <p className="hero__subtitle">
              {translate({
                id: 'homepage.description',
                message: 'A fast, lightweight Git TUI (terminal interface) for Git operations',
              })}
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                <Translate id="homepage.getStarted">Get Started</Translate>
              </Link>
              <Link
                className={clsx("button button--secondary button--lg", styles.secondaryButton)}
                to="https://github.com/gohyuhan/gitti">
                <Translate id="homepage.github">GitHub</Translate>
              </Link>
            </div>
          </div>
          <div className={styles.heroLogo}>
            <img src="img/logo.svg" alt="Gitti Logo" />
          </div>
        </div>

        <TerminalWindow />
        <InstallSection />
      </div>
    </section>
  );
}

function TerminalWindow() {
  const [lines, setLines] = useState<Array<{ prompt: string; command?: string; output?: string; isWelcome?: boolean }>>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isClearing, setIsClearing] = useState(false);

  const welcomeMessage = translate({
    id: 'terminal.welcome',
    message: 'Welcome to Gitti Docs',
  });

  const commandSequence = [
    { prompt: '~/', command: 'cd projects' },
    { prompt: '~/projects', command: 'cd gitti-docs' },
    { prompt: '~/projects/gitti-docs', command: 'npm start' },
    { prompt: '~/projects/gitti-docs', output: 'Starting server...' },
    { prompt: '~/projects/gitti-docs', output: welcomeMessage, isWelcome: true },
  ];

  // Reset animation
  const resetAnimation = () => {
    setLines([]);
    setCurrentLineIndex(0);
    setTypedText('');
    setIsClearing(false);
  };

  // Main animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isClearing) {
      // Clearing animation - erase last line character by character
      if (lines.length > 0) {
        const lastLine = lines[lines.length - 1];
        const lastText = lastLine.command || lastLine.output || '';

        if (lastText.length > 0) {
          // Remove one character from the last line
          timeout = setTimeout(() => {
            setLines(prev => {
              const newLines = [...prev];
              const lastIdx = newLines.length - 1;
              const text = newLines[lastIdx].command || newLines[lastIdx].output || '';
              const shortenedText = text.substring(0, text.length - 1);

              if (newLines[lastIdx].command) {
                newLines[lastIdx] = { ...newLines[lastIdx], command: shortenedText };
              } else {
                newLines[lastIdx] = { ...newLines[lastIdx], output: shortenedText };
              }
              return newLines;
            });
          }, 35); // Faster than typing (20ms per character)
        } else {
          // Last line is empty, remove it
          setLines(prev => prev.slice(0, -1));
        }
      } else {
        // All lines cleared, reset
        resetAnimation();
      }
    } else if (currentLineIndex < commandSequence.length) {
      const currentCmd = commandSequence[currentLineIndex];
      const textToType = currentCmd.command || currentCmd.output || '';

      if (typedText.length < textToType.length) {
        // Typing effect
        timeout = setTimeout(() => {
          setTypedText(textToType.substring(0, typedText.length + 1));
        }, 75); // 50ms per character
      } else {
        // Finished typing this command, wait then move to next
        timeout = setTimeout(() => {
          setLines(prev => [...prev, {
            ...currentCmd,
            command: currentCmd.command ? typedText : undefined,
            output: currentCmd.output ? typedText : undefined,
          }]);
          setTypedText('');
          setCurrentLineIndex(prev => prev + 1);
        }, currentCmd.isWelcome ? 0 : 500);
      }
    } else if (currentLineIndex === commandSequence.length) {
      // Animation complete, wait 10 seconds then start clearing
      timeout = setTimeout(() => {
        setIsClearing(true);
      }, 10000);
    }

    return () => clearTimeout(timeout);
  }, [currentLineIndex, typedText, isClearing, lines]);

  return (
    <div className={styles.terminalWindow}>
      <div className={styles.terminalHeader}>
        <div className={clsx(styles.terminalDot, styles.red)}></div>
        <div className={clsx(styles.terminalDot, styles.yellow)}></div>
        <div className={clsx(styles.terminalDot, styles.green)}></div>
      </div>
      <div className={styles.terminalBody}>
        {lines.map((line, idx) => (
          <div key={idx} className={clsx(styles.terminalLine, line.output && styles.output)}>
            {line.command !== undefined && (
              <>
                <span className={styles.prompt}>➜</span> <span className={styles.path}>{line.prompt}</span> {line.command}
              </>
            )}
            {line.output !== undefined && (
              <span className={line.isWelcome ? styles.welcomeMessage : undefined}>
                {line.output}
                {line.isWelcome && <span className={styles.cursor}></span>}
              </span>
            )}
          </div>
        ))}
        {typedText && currentLineIndex < commandSequence.length && (
          <div className={clsx(styles.terminalLine, commandSequence[currentLineIndex].output && styles.output)}>
            {commandSequence[currentLineIndex].command !== undefined && (
              <>
                <span className={styles.prompt}>➜</span> <span className={styles.path}>{commandSequence[currentLineIndex].prompt}</span> {typedText}
                <span className={styles.cursor}></span>
              </>
            )}
            {commandSequence[currentLineIndex].output !== undefined && (
              <>
                {typedText}
                <span className={styles.cursor}></span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function InstallSection() {
  const [activeTab, setActiveTab] = useState('go');

  const installCommands = {
    go: 'go install github.com/gohyuhan/gitti@latest',
    macos: 'Coming soon...',
    linux: 'Coming soon...',
    windows: 'Coming soon...'
  };

  const tabs = [
    { id: 'go', label: <Translate id="install.tab.go">Go</Translate> },
    { id: 'macos', label: <Translate id="install.tab.macos">macOS</Translate> },
    { id: 'linux', label: <Translate id="install.tab.linux">Linux</Translate> },
    { id: 'windows', label: <Translate id="install.tab.windows">Windows</Translate> }
  ];

  return (
    <section className={styles.installSection}>
      <div className="container">
        <div className={styles.installBox}>
          <div className={styles.installHeader}>
            <span className={styles.installIcon}>📦</span>
            <Heading as="h3" className={styles.installBoxTitle}>
              <Translate id="install.title">Quick Install</Translate>
            </Heading>
          </div>
          <div className={styles.installTabs}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={clsx(styles.installTab, activeTab === tab.id && styles.installTabActive)}
                onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
          <CodeBlock language={activeTab === 'windows' ? 'powershell' : activeTab === 'go' ? 'bash' : 'bash'}>
            {installCommands[activeTab]}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description, icon: Icon }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrapper}>
          <Icon />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'Home' })}
      description={translate({ id: 'homepage.description', message: 'A fast, lightweight terminal UI for Git operations' })}>
      <main>
        <Hero />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                title={<Translate id="feature.fast.title">Fast & Lightweight</Translate>}
                description={<Translate id="feature.fast.description">Instant startup. Low memory footprint. Built with Go and Bubble Tea for maximum performance.</Translate>}
                icon={ZapIcon}
              />
              <Feature
                title={<Translate id="feature.keyboard.title">Keyboard Driven</Translate>}
                description={<Translate id="feature.keyboard.description">Never touch your mouse again. Navigate branches, commits, and files with intuitive keybindings.</Translate>}
                icon={KeyboardIcon}
              />
              <Feature
                title={<Translate id="feature.visual.title">Streamlined Workflow</Translate>}
                description={<Translate id="feature.visual.description">Skip complex git commands. Interactive UI guides you through operations with visual feedback at every step.</Translate>}
                icon={EyeIcon}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
