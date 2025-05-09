'use client';

export default function ContactContent() {
  return (
    <div className="contactContainer">
      <h1 style={{ textAlign: 'center' }}>CONTACT ME</h1>
      <div style={{ width: '50%', margin: 'auto' }}>
        <input
          style={{
            padding: '10px',
            width: 'calc(50% - 5px)',
            border: 'none',
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
            margin: '10px 0',
          }}
          type="text"
          placeholder="Enter your name"
        />
        <input
          style={{
            padding: '10px',
            width: 'calc(50% - 5px)',
            border: 'none',
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
            margin: '10px 0',
          }}
          type="text"
          placeholder="Enter your email"
        />
      </div>
      <textarea
        style={{
          display: 'block',
          padding: '50px 10px',
          width: '50%',
          border: 'none',
          backgroundColor: '#f1f1f1',
          margin: '10px auto',
          borderRadius: '10px',
        }}
        placeholder="Enter your message"
      />
      <button
        style={{
          display: 'block',
          padding: '10px',
          color: 'white',
          width: '150px',
          backgroundColor: '#4a5fc1',
          borderRadius: '10px',
          margin: '10px auto',
          border: 'none',
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
