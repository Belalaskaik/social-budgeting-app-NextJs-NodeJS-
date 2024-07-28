// app/signup/zodErrors.jsx
export function ZodErrors({ errors }) {
  if (!errors || Object.keys(errors).length === 0) return null;
  
  return (
    <ul style={{ color: 'red', marginTop: '5px', fontSize: '0.8rem', paddingLeft: '20px' }}>
      {Object.entries(errors).map(([field, fieldErrors]) => (
        <li key={field}>
          {Array.isArray(fieldErrors) ? fieldErrors.join(', ') : fieldErrors}
        </li>
      ))}
    </ul>
  );
}