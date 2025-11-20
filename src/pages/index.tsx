import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import { JSX, useState } from 'react';

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

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
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

        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <div className={clsx(styles.terminalDot, styles.red)}></div>
            <div className={clsx(styles.terminalDot, styles.yellow)}></div>
            <div className={clsx(styles.terminalDot, styles.green)}></div>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>➜</span> <span className={styles.path}>~</span> cd my-project
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>➜</span> <span className={styles.path}>my-project</span> gitti
            </div>
            <div className={clsx(styles.terminalLine, styles.output)}>
              Initializing Gitti UI... <span className={styles.cursor}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function InstallSection() {
  const [activeTab, setActiveTab] = useState('go');

  const installCommands = {
    go: 'go install github.com/gohyuhan/gitti@latest',
    macos: 'brew install gitti',
    linux: 'curl -fsSL https://raw.githubusercontent.com/gohyuhan/gitti/main/install.sh | sh',
    windows: 'irm https://raw.githubusercontent.com/gohyuhan/gitti/main/install.ps1 | iex'
  };

  const tabs = [
    { id: 'go', label: <Translate id="install.tab.go">Go</Translate> },
    { id: 'macos', label: <Translate id="install.tab.macos">macOS</Translate> },
    { id: 'linux', label: <Translate id="install.tab.linux">Linux</Translate> },
    { id: 'windows', label: <Translate id="install.tab.windows">Windows</Translate> }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommands[activeTab]);
  };

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
          <div className={styles.installCommand} onClick={copyToClipboard}>
            <code>{installCommands[activeTab]}</code>
          </div>
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
      <HomepageHeader />
      <InstallSection />
      <main>
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
