import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div style={{ padding: 20, color: '#FFB74D', backgroundColor: '#000', minHeight: '100vh' }}>
        <h2>No project data found!</h2>
        <p>Please navigate from the Projects page.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: 20,
            padding: '10px 20px',
            backgroundColor: '#FFB74D',
            color: '#000',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 30,
        color: '#FFB74D',
        backgroundColor: '#000',
        minHeight: '100vh',
        maxWidth: 900,
        margin: '40px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderRadius: 15,
        boxShadow: '0 0 20px #FFB74D33',
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: 30,
          padding: '10px 25px',
          backgroundColor: '#FFB74D',
          color: '#000',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px #FFB74D88',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffaa33')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFB74D')}
      >
        ← Back to Home
      </button>

      <h1 style={{ fontSize: '3rem', marginBottom: 10, letterSpacing: '1.5px' }}>{project.name}</h1>
      <p
        style={{
          fontStyle: 'italic',
          marginBottom: 25,
          fontSize: '1.1rem',
          color: '#f0c674',
          letterSpacing: '0.05em',
        }}
      >
        {project.year}
      </p>

      <img
        src={project.image}
        alt={project.name}
        style={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 15,
          marginBottom: 25,
          boxShadow: '0 8px 16px rgba(255, 183, 77, 0.4)',
        }}
      />

      <p
        style={{
          fontSize: '1.15rem',
          lineHeight: 1.6,
          marginBottom: 30,
          color: '#FFD87D',
          textShadow: '0 0 3px #FFB74D88',
        }}
      >
        {project.description}
      </p>

      {/* Tech Stack Section with tags */}
      <h3
        style={{
          marginBottom: 15,
          fontSize: '1.3rem',
          borderBottom: '2px solid #FFB74D',
          paddingBottom: 5,
          letterSpacing: '0.1em',
        }}
      >
        Tech Stack:
      </h3>
      <div style={{ marginBottom: 30, display: 'flex', flexDirection: 'column', gap: 15 }}>
        {Object.entries(project.tech).map(([category, techs]) => (
          <div key={category}>
            <strong style={{ fontSize: '1.1rem', marginBottom: 6, display: 'block' }}>{category}:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
              {techs.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: 'rgba(255, 183, 77, 0.15)',
                    color: '#FFB74D',
                    padding: '6px 12px',
                    borderRadius: 15,
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    userSelect: 'none',
                    boxShadow: '0 0 5px rgba(255, 183, 77, 0.4)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Challenges Faced */}
      {project.challenges && (
        <>
          <h3
            style={{
              marginBottom: 15,
              fontSize: '1.3rem',
              borderBottom: '2px solid #FFB74D',
              paddingBottom: 5,
              letterSpacing: '0.1em',
            }}
          >
            Challenges Faced:
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: 30,
              color: '#FFD87D',
              textShadow: '0 0 3px #FFB74D88',
              lineHeight: 1.5,
            }}
          >
            {project.challenges}
          </p>
        </>
      )}

      {/* Future Plans */}
      {project.futurePlans && (
        <>
          <h3
            style={{
              marginBottom: 15,
              fontSize: '1.3rem',
              borderBottom: '2px solid #FFB74D',
              paddingBottom: 5,
              letterSpacing: '0.1em',
            }}
          >
            Future Plans:
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: 30,
              color: '#FFD87D',
              textShadow: '0 0 3px #FFB74D88',
              lineHeight: 1.5,
            }}
          >
            {project.futurePlans}
          </p>
        </>
      )}

      <div style={{ display: 'flex', gap: 20 }}>
        {project.live && 
        
         <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#FFB74D',
            padding: '12px 28px',
            borderRadius: 10,
            color: '#000',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 5px 10px #FFB74Daa',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffaa33')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFB74D')}
        >
          Live Site
        </a>

        }
        
       
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#FFB74D',
            padding: '12px 28px',
            borderRadius: 10,
            color: '#000',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 5px 10px #FFB74Daa',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffaa33')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFB74D')}
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
