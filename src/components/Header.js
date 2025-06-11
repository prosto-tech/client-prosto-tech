import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <Navigation />

      <div className="header-content mt-5">
        <h1 className="header-content__title">"Просто Тех"</h1>
        <p className="header-content__desc">
          Ми пропонуємо в оренду дрібну побутову та певні види комп'ютерної техніки за вигідними умовами
        </p>
        <p>
          <Link className="btn btn-oval" to="/register">Переглянути</Link>
        </p>
      </div>
    </header>
  );
}
