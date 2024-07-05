// component imports
import reactLogo from '@/assets/react-logo.png';

const TestForTheme = () => (
  <div
    style={{
      border: `2px solid yellow`,
      borderRadius: '15px',
      width: '80vw',
      marginBottom: '1.5rem',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '0.5rem',
          paddingLeft: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: '900' }}>
          Why are big React applications difficult to manage?
        </h2>
        <div style={{ fontSize: '0.75rem' }}>
          <span style={{ color: 'lightblue' }}>📅 10th Sep 2023</span>
          <span style={{ marginInline: '1rem' }}>|</span>
          <span style={{ color: 'lightblue' }}>📖 4 min read</span>
        </div>
        <p>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components.{' '}
        </p>
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              marginRight: '1rem',
              padding: '0.2rem 0.5rem',
              backgroundColor: 'var(--theme-clr-neutral)',
              borderRadius: '100vmax',
            }}
          >
            coding
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              marginRight: '1rem',
              padding: '0.2rem 0.5rem',
              backgroundColor: 'var(--theme-clr-accent)',
              borderRadius: '100vmax',
            }}
          >
            framework
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              marginRight: '1rem',
              padding: '0.2rem 0.5rem',
              backgroundColor: 'var(--theme-clr-primary)',
              borderRadius: '100vmax',
            }}
          >
            life
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBlock: '1rem',
        }}
      >
        <img
          style={{
            borderRadius: '15px',
            width: '65%',
          }}
          src={reactLogo}
          alt="react-logo"
        />
      </div>
    </div>
  </div>
);

export const Blog = () => (
  <>
    <button style={{ marginBottom: '2rem' }} type="button">
      This is a test
    </button>

    <input type="text" placeholder="Search posts..." />

    <TestForTheme />
    <TestForTheme />
  </>
);
