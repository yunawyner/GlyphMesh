// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlyphMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlyphMesh/i);
    expect(titleElement).toBeInTheDocument();
});
