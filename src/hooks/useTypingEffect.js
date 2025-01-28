import { useState, useEffect } from 'react';

export function useTypingEffect(phrases, typingSpeed = 150, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentText === phrases[currentIndex]) {
        // Pause before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      } else {
        // Type the next character
        timeout = setTimeout(() => {
          setCurrentText(phrases[currentIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    } else {
      if (currentText === '') {
        // Move to next phrase
        setCurrentIndex((current) => (current + 1) % phrases.length);
        setIsTyping(true);
      } else {
        // Delete the last character
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}

