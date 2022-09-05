import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
    const [state, setState] = useState(0);

    const onScroll = () => {
		const state = window.scrollY;
        setState(state);
    }

    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return state;
}

export default useScroll;
