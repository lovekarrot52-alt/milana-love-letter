"use client";

import { useState } from "react";

const floatingHearts = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 96}%`,
  delay: `${(index % 7) * -1.3}s`,
  duration: `${8 + (index % 6)}s`,
  size: `${14 + (index % 5) * 5}px`,
}));

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="love-page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <div className="heart-field" aria-hidden="true">
        {floatingHearts.map((heart) => (
          <span
            className="floating-heart"
            key={heart.id}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <section className="love-card">
        <div className="tiny-label"><span>♥</span> кое-что важное <span>♥</span></div>
        <h1>Милана,<br /><em>ты мне нравишься</em></h1>
        <p className="lead">
          Рядом с тобой обычные дни становятся особенными.<br />
          Поэтому я сделал для тебя это маленькое место в интернете.
        </p>

        <button className={`heart-button ${opened ? "opened" : ""}`} onClick={() => setOpened(true)}>
          <span className="button-heart">♥</span>
          <span>{opened ? "Это всё для тебя" : "Нажми на сердечко"}</span>
        </button>

        <div className={`secret ${opened ? "visible" : ""}`} aria-live="polite">
          <div className="burst" aria-hidden="true">♥ ♥ ♥ ♥ ♥ ♥</div>
          <p>Я просто хотел сказать: ты очень красивая, милая и невероятная.</p>
          <strong>Надеюсь, этот сайт заставит тебя улыбнуться ♡</strong>
        </div>

        <footer>сделано с теплом — специально для Миланы</footer>
      </section>
    </main>
  );
}
