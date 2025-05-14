import { useHover } from './useHover/useHover.js';
import './App.css';

export default function App() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}
