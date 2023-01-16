const app = document.querySelector("#app");

const appReact = ReactDOM.createRoot(app);

const api = "http://localhost:3000/edges";
let search = "";
let isHasHtr = true;

let headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

async function start() {
  const data = await fetch(api, {
    method: "GET",
    headers: headersList,
  })
    .then((respon) => respon.json())
    .then((data) => data);
  const edges = data;
  edges.search = search;

  renderApp(<App edges={edges} />, appReact);
}

function renderApp(component, root) {
  root.render(component);
}

start();

function App({ edges }) {
  return (
    <React.Fragment>
      <Header edges={edges} />
      <Nav edges={edges} />
      <Main edges={edges} />
      <Modal edges={edges} />
    </React.Fragment>
  );
}

function Header({ edges }) {
  return (
    <header className="row row-between">
      <a href="#" className="header__logo">
        <svg
          aria-label="Instagram"
          className="_ab6-"
          color="#262626"
          fill="#262626"
          height="25"
          role="img"
          viewBox="32 4 113 32"
          width="103"
        >
          <path
            clipRule="evenodd"
            d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </a>

      <div className="header--with-input">
        <div className="header--with-input--not-absolute row">
          <HeaderInput edges={edges} />

          <a href="#" className="header__notification">
            <div className="notification__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
          </a>
        </div>
        <HistoryAbsolute edges={edges} />
      </div>
    </header>
  );
}

function HistoryAbsolute({ edges }) {
  return (
    <div className="header--with-input--absolute">
      <div className="history--search">
        <div className="history__head row row-between">
          <div className="history__head__item">
            <h2>Gần đây</h2>
          </div>

          <div
            className={
              isHasHtr
                ? "history__head__item item--blue has-history"
                : "history__head__item item--blue"
            }
          >
            <a href="#">Xóa tất cả</a>
          </div>
        </div>

        <div
          className={isHasHtr ? "history__body has-history" : "history__body"}
        >
          <h2>Không có kết quả phù hợp</h2>
          {edges.filter(filtered).map((edge, index) => (
            <MainRightItem edge={edge} option="header" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeaderInput({ edges }) {
  return (
    <div className="header__input row">
      <div className="icon-search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <input
        className="input-search"
        type="text"
        placeholder="Search"
        onInput={fadeHistory(edges)}
        onBlur={hiddenHistory()}
      />
    </div>
  );
}

function Nav({ edges }) {
  return (
    <nav className="nav">
      <div className="nav--wrap mcol mcol-center">
        <ul className="nav__list row row-between mcol mcol-center lcol lcol-start">
          <li className="nav__logo mcol mcol-center">
            <a href="#" className="header__logo nav__logo">
              <svg
                aria-label="Instagram"
                className="_ab6-"
                color="#262626"
                fill="#262626"
                height="29"
                role="img"
                viewBox="32 4 113 32"
                width="103"
              >
                <path
                  clipRule="evenodd"
                  d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>

            <a className="nav__icon icon-logo" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                </svg>
              </div>

              <span className="nav-desc">Home</span>
            </a>
          </li>

          <li className="nav-search">
            <a className="row" href="#" onClick={fadeHistoryPC(edges)}>
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>

              <span className="nav-desc">Search</span>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-browser-safari"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0Zm0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0ZM4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341Zm6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8Zm12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8ZM2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091Zm6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13ZM3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354Zm9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353ZM1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483Zm-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177Zm12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177ZM3.045 12.944a.299.299 0 0 1-.029-.376l3.898-5.592a.25.25 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.25.25 0 0 1-.062.062l-5.592 3.898a.299.299 0 0 1-.382-.034l-.005-.006Zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176ZM9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176Z" />
                </svg>
              </div>

              <span className="nav-desc">New feeds</span>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </div>

              <span className="nav-desc">Reel</span>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>

              <span className="nav-desc">Notification</span>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </div>

              <span className="nav-desc">Add</span>
            </a>
          </li>

          <li>
            <a className="row" href="#">
              <div className="nav__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-messenger"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                </svg>
              </div>

              <span className="nav-desc">Messenger</span>
            </a>
          </li>

          <li className="menu">
            <a className="row mrow" href="#">
              <div className="nav__icon icon-menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
              <span className="nav-desc">Xem thêm</span>
            </a>
          </li>
        </ul>
      </div>
      <SearchElmPC edges={edges} onClick={stopProp()} />
    </nav>
  );
}

function SearchElmPC({ edges }) {
  return (
    <div className="nav--absolute nav__search">
      <div className="nav__search__head">
        <div className="head__title">
          <h1>Tìm kiếm</h1>
        </div>
        <div className="head__input">
          <HeaderInput edges={edges} />
        </div>
      </div>

      <div className="nav__search__body">
        <HistoryAbsolute edges={edges} />
      </div>
    </div>
  );
}

function Main({ edges }) {
  return (
    <main className="main lgrid l6-6" onClick={hiddenSearch()}>
      <div className="main--left">
        <MainBanner edges={edges} />
        <Posts edges={edges} />
      </div>

      <div className="main--right">
        <div className="main--rigth-wrap">
          <MainRightHead edges={edges} />
          <MainRightBody edges={edges} />
          <MainFooter edges={edges} />
        </div>
      </div>
    </main>
  );
}

function MainBanner({ edges }) {
  return (
    <div className="main__banner">
      <div className="main--with-banner-item  row row-between">
        {edges.map((edge, index) => (
          <div className="banner__item--wrap col col-center" key={index}>
            <a href="#" className="banner__item">
              <div>
                <img
                  crossOrigin="anonymous"
                  src={edge.thumbnail_resources[0].src}
                  alt={edge.owner.username}
                />
              </div>
            </a>
            <h3>{edge.owner.username}</h3>
          </div>
        ))}
      </div>

      <div className="icon-next active" onClick={nextSlided()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-right-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      </div>

      <div className="icon-prev" onClick={prevSlided()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </div>
    </div>
  );
}

function Posts({ edges }) {
  return (
    <div className="posts">
      {edges.map((edge, index) => (
        <PostItem key={index} edge={edge} option="post-main" edges={edges} />
      ))}
    </div>
  );
}

function PostItem({ edge, option, edges }) {
  return (
    <div className={"post" + " " + option}>
      <header className="post__header row row-between">
        <div
          className={"header__user" + " " + "header__user-" + edge.id}
          onMouseOver={fadeMiniProfile(edge.id)}
          onMouseOut={hiddenMiniProfile(edge.id)}
        >
          <div className="header__user--nothover row">
            <div className="user__avatar">
              <div>
                <img
                  crossOrigin="anonymous"
                  src={edge.display_resources[0].src}
                  alt={edge.owner.username}
                />
              </div>
            </div>

            <div className="user__inf">
              <h4 className="user__inf__name">{edge.owner.username}</h4>

              <span className="user__inf__location">{edge.owner.username}</span>
            </div>
          </div>

          {/* {<!-- phan header user absolute hover -->} */}
          <div className="header__user--hover">
            <MiniProfile edge={edge} />
          </div>
        </div>

        <div className="header__options">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>
      </header>

      <main className={"post__main" + " " + option}>
        <div className="main__image">
          <img
            crossOrigin="anonymous"
            src={edge.display_resources[0].src}
            alt={edge.owner.username}
            onDoubleClick={likedDbl(edge.id, edge.viewer_has_liked)}
          />
        </div>

        <MainModalContent edge={edge} />

        <div className="main__inf">
          <div className="inf__icons row row-between">
            <div className="icons--right row">
              <a
                className={
                  "icon icons-heart" + (edge.viewer_has_liked ? " active" : "")
                }
                href="#"
                onClick={liked(edge.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </a>

              <div
                className="icon icons-comment"
                onClick={fadePostCmt(edge.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
              </div>

              <div className="icon icons-tele">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
              </div>
            </div>

            <div className="icon--left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-save2"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
              </svg>
            </div>
          </div>

          <div className="inf__likes">
            <span>
              {(Number(edge.edge_media_preview_like.count) > 1000000 &&
                Math.floor(
                  Number(edge.edge_media_preview_like.count) / 1000000
                ) + " triệu người đã thích") ||
                (Number(edge.edge_media_preview_like.count) > 1000 &&
                  (Number(edge.edge_media_preview_like.count) / 1000).toFixed(
                    1
                  ) + "K người đã thích")}{" "}
            </span>
          </div>

          <div className="inf__status">
            <span>
              <strong>{edge.owner.username}</strong>{" "}
              {strongStrings(edge.edge_media_to_caption.edges[0].node.text)}{" "}
              <a onClick={hiddenMoreSts()} href="#">
                Hidden more
              </a>
            </span>
            <a className="fade-comment" onClick={fadeMoreSts()} href="#">
              View More
            </a>
          </div>

          <div className="inf__comments">
            <div className="comments__title">
              <span onClick={fadeModal(edge.id)}>
                Xem tất cả {edge.edge_media_to_comment.count} bình luận
              </span>
            </div>
            <a href="#" className="user-comment">
              <span>
                <strong>
                  {edge.edge_media_to_comment.content.user !== null &&
                    edge.owner.username}
                </strong>
                {edge.edge_media_to_comment.content.user !== null &&
                  ": " +
                    edge.edge_media_to_comment.content.user[
                      edge.edge_media_to_comment.content.user.length - 1
                    ].body}
              </span>
            </a>
          </div>

          <div className="comment__times">
            <span>20 mins ago</span>
          </div>
        </div>
      </main>

      <footer className="post__footer row row-between">
        <div className="footer__input row">
          <div className="footer__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </div>
          <input
            id="comment"
            type="text"
            placeholder="Add comments"
            onKeyUp={commented(edges, edge.id)}
          />
        </div>

        <div className="footer__submit">
          <input
            type="button"
            value="Post"
            onClick={commented2(edges, edge.id)}
          />
        </div>
      </footer>
    </div>
  );
}

function MiniProfile({ edge }) {
  return (
    <div className="mini-profile">
      <div className="profile__head row">
        <div className="user__avatar">
          <div>
            <img
              crossOrigin="anonymous"
              src={edge.thumbnail_resources[0].src}
              alt=""
            />
          </div>
        </div>

        <div className="user__inf">
          <h4 className="user__inf__name">{edge.owner.username}</h4>

          <span className="user__inf__location">American</span>
        </div>
      </div>

      <div className="profile__main">
        <div className="profile__main__inf row row-between">
          <div className="profile__main__inf__item item--posts col col-center">
            <h4>{edge.pinned_for_users.length || 0}</h4>
            <span>Posts</span>
          </div>

          <div className="profile__main__inf__item item--following col col-center">
            <h4>
              {(edge.edge_media_preview_like.count > 1000000 &&
                Math.floor(edge.edge_media_preview_like.count / 1000000) +
                  " " +
                  "triệu") ||
                (edge.edge_media_preview_like.count > 1000 &&
                  Math.floor(edge.edge_media_preview_like.count / 1000) +
                    "K") ||
                (edge.edge_media_preview_like.count > 0 &&
                  edge.edge_media_preview_like.count)}
            </h4>
            <span>Following</span>
          </div>

          <div className="profile__main__inf__item item--following-friend col col-center">
            <h4>
              {(edge.edge_media_to_comment.count > 1000000 &&
                Math.floor(edge.edge_media_to_comment.count / 1000000) +
                  " " +
                  "triệu") ||
                (edge.edge_media_to_comment.count > 1000 &&
                  Math.floor(edge.edge_media_to_comment.count / 1000) + "K") ||
                (edge.edge_media_to_comment.count > 0 &&
                  edge.edge_media_to_comment.count)}
            </h4>
            <span>Following</span>
          </div>
        </div>

        <div className="profile__main__images lgrid l4-4-4 lgap-4">
          <div className="image__item">
            <img
              crossOrigin="anonymous"
              src={edge.pinned_for_users[0].src || ""}
              alt=""
            />
          </div>
          <div className="image__item">
            <img
              crossOrigin="anonymous"
              src={edge.pinned_for_users[1].src || ""}
              alt=""
            />
          </div>
          <div className="image__item">
            <img
              crossOrigin="anonymous"
              src={edge.pinned_for_users[2].src || ""}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="profile__foot row row-center">
        <div className="profile__foot__item foot__item--message row row-center">
          <div className="icon-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
          </div>
          <span>Messenging</span>
        </div>

        <div className="profile__foot__item foot__item--follow">
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

function MainModalContent({ edge }) {
  return (
    <div className="main__modal-comment">
      <div className="main__modal__item row row-start">
        <div className="item__avatar">
          <img
            crossOrigin="anonymous"
            src={edge.thumbnail_resources[0].src}
            alt={edge.owner.username}
          />
        </div>

        <div className="item__content-comment">
          <span>
            <strong className="user">{edge.owner.username} </strong>{" "}
            {edge.edge_media_to_caption.edges[0].node.text}
          </span>
        </div>
      </div>

      {edge.edge_media_to_comment.content.other &&
        edge.edge_media_to_comment.content.other.map((comment, index) => (
          <div className="main__modal__item row row-start" key={index}>
            <div className="item__avatar">
              <img
                crossOrigin="anonymous"
                src={edge.thumbnail_resources[0].src}
                alt={edge.owner.username}
              />
            </div>

            <div className="item__content-comment">
              <span>
                <strong className="user">{edge.owner.username} </strong>{" "}
                {comment.body}
              </span>
            </div>
          </div>
        ))}

      {edge.edge_media_to_comment.content.user &&
        edge.edge_media_to_comment.content.user.map((comment, index) => (
          <div className="main__modal__item row row-start" key={index}>
            <div className="item__avatar">
              <img
                crossOrigin="anonymous"
                src={edge.thumbnail_resources[0].src}
                alt={edge.owner.username}
              />
            </div>

            <div className="item__content-comment">
              <span>
                <strong className="user">{edge.owner.username} </strong>{" "}
                {comment.body}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

function MainRightHead({ edges }) {
  return (
    <div className="main__head row row-between">
      <div className="main__head__inf row">
        <div className="inf__img">
          <img
            crossOrigin="anonymous"
            src={edges[3].thumbnail_resources[0].src}
            alt={edges[3].owner.username}
          />
        </div>
        <div className="inf--text">
          <h4>{edges[3].owner.email}</h4>
          <span>{edges[3].owner.username}</span>
        </div>
      </div>

      <div className="main__head__button">
        <input type="button" value="Change" />
      </div>
    </div>
  );
}

function MainRightBody({ edges }) {
  return (
    <div className="main__body mt-24">
      <div className="main__body__head row row-between">
        <div className="body__head--sucges">
          <span>Gợi ý cho bạn</span>
        </div>

        <div className="body__head--all">
          <a href="#">Xem tất cả</a>
        </div>
      </div>
      {edges.map((edge, index) => (
        <MainRightItem edge={edge} key={index} />
      ))}
    </div>
  );
}

function MainRightItem({ edge, option }) {
  return (
    <div className="main__body__item row row-between mt-12">
      <div
        className={"item__inf" + " " + "item__inf-" + edge.id}
        onMouseOver={option !== "header" ? fadeMiniProfile(edge.id) : undefined}
        onMouseOut={hiddenMiniProfile(edge.id)}
      >
        <div className="item__inf--wrap row">
          <div className="inf__img">
            <img
              crossOrigin="anonymous"
              src={edge.thumbnail_resources[0].src}
              alt={edge.owner.username}
            />
          </div>
          <div className="inf__text">
            <h4>{edge.owner.email}</h4>
            <span>{edge.owner.username}</span>
          </div>
        </div>
        <div className="header__user--hover item__inf--absolute">
          <MiniProfile edge={edge} />
        </div>
      </div>

      <div className="main__head__button main__body__button">
        <input type="button" value="Follow" />
      </div>
    </div>
  );
}

function MainFooter({ edges }) {
  return (
    <div className="main__foot mt-48">
      <ul className="main__foot__item row">
        <li>
          <a href="">Giới thiệu</a>
        </li>
        <li>
          <a href="">Trợ giúp</a>
        </li>
        <li>
          <a href="">Báo chí</a>
        </li>
        <li>
          <a href="">API</a>
        </li>
        <li>
          <a href="">Việc làm</a>
        </li>
        <li>
          <a href="">Quyền riêng tư</a>
        </li>
      </ul>

      <ul className="main__foot__item row">
        <li>
          <a href="">Quyền riêng tư</a>
        </li>
        <li>
          <a href="">Điều khoản</a>
        </li>
        <li>
          <a href="">Vị trí</a>
        </li>
        <li>
          <a href="">Ngôn ngữ</a>
        </li>
      </ul>

      <div className="main__foot__item item__cpr">
        <span>By Lê Văn Minh</span>
      </div>
    </div>
  );
}

function Modal({ edges }) {
  return (
    <div className="modal" onClick={hiddenModal()}>
      <div className="modal__close" onClick={hiddenModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      {edges.map((edge, index) => (
        <div className="modal__content row" key={index} onClick={stopProp()}>
          <div className="modal__image">
            <img
              crossOrigin="anonymous"
              src={edge.display_resources[0].src}
              alt={edge.owner.username}
            />
          </div>
          <PostItem edge={edge} option="modal-main" edges={edges} />
        </div>
      ))}
    </div>
  );
}

// Logic tha tim
const liked = (id) => (e) => {
  e.preventDefault();
  const heart = e.target.closest(".icons-heart");
  heart.classList.toggle("active");

  //sửa data
  const data = heart.matches(".active")
    ? { viewer_has_liked: true }
    : { viewer_has_liked: false };
  const optionPatch = {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(api + "/" + `${id}`, optionPatch);
};

//logic dblclick liked
const likedDbl = (id, isliked) => (e) => {
  const heart = e.target.closest(".post__main").querySelector(".icons-heart");
  heart.classList.toggle("active");

  //sua data
  const data = { viewer_has_liked: !isliked };
  const optionPatch = {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  fetch(api + "/" + id, optionPatch);
};

//logic comment by enter
const commented = (edges, id) => async (e) => {
  if (e.keyCode === 13 && e.target.value.trim() !== "") {
    const data = {
      edge_media_to_comment: {
        count: edges[id - 1].edge_media_to_comment.count,
        page_info: edges[id - 1].edge_media_to_comment.page_info,
        content: {
          user: edges[id - 1].edge_media_to_comment.content.user
            ? edges[id - 1].edge_media_to_comment.content.user.concat({
                id: edges[id - 1].edge_media_to_comment.content.user.length + 1,
                body: e.target.value,
              })
            : [].concat({
                id: 1,
                body: e.target.value,
              }),
          other: edges[id - 1].edge_media_to_comment.content.other,
        },
      },
    };

    const optionPatch = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const newData = await fetch(api + "/" + `${id}`, optionPatch)
      .then((respon) => respon.json())
      .then((data) => data);

    edges[id - 1] = newData;

    renderApp(<App edges={edges} />, appReact);
    e.target.value = "";
  }

  if (e.target.value.trim() !== "") {
    // Them active cho button post
    e.target.parentElement.parentElement
      .querySelector(".footer__submit")
      .classList.add("active");
  } else {
    e.target.parentElement.parentElement
      .querySelector(".footer__submit")
      .classList.remove("active");
  }
};

// logic comment by button
const commented2 = (edges, id) => async (e) => {
  const data = {
    edge_media_to_comment: {
      count: edges[id - 1].edge_media_to_comment.count,
      page_info: edges[id - 1].edge_media_to_comment.page_info,
      content: {
        user: edges[id - 1].edge_media_to_comment.content.user
          ? edges[id - 1].edge_media_to_comment.content.user.concat({
              id: edges[id - 1].edge_media_to_comment.content.user.length + 1,
              body: e.target.parentElement.parentElement.querySelector(
                "#comment"
              ).value,
            })
          : [].concat({
              id: 1,
              body: e.target.parentElement.parentElement.querySelector(
                "#comment"
              ).value,
            }),
        other: edges[id - 1].edge_media_to_comment.content.other,
      },
    },
  };

  const optionPatch = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const newData = await fetch(api + "/" + id, optionPatch)
    .then((response) => response.json())
    .then((data) => data);

  edges[id - 1] = newData;

  renderApp(<App edges={edges} />, appReact);
  e.target.parentElement.parentElement.querySelector("#comment").value = "";

  e.target.parentElement.classList.remove("active");
};

//logic an hien them status
const hiddenMoreSts = () => (e) => {
  e.preventDefault();
  e.target.parentElement.parentElement.classList.remove("active");
  e.target.parentElement.parentElement.querySelector(
    ".fade-comment"
  ).style.display = "block";
};

const fadeMoreSts = () => (e) => {
  e.preventDefault();
  e.target.parentElement.classList.add("active");
  e.target.style.display = "none";
};

// xu ly sau ky tu # chu co uppercase
const strongStrings = (strs) => {
  const arr = strs.split(" ");
  for (let i in arr) {
    if (arr[i][0] === "#") {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join(" ");
};

//xu ly logic hien input comment

const fadePostCmt = (id) => (e) => {
  if (!e.target.closest(".modal")) {
    const posCmt = document.querySelectorAll(".post__footer");
    posCmt[id - 1].classList.toggle("active");
  }
};

const nextSlided = () => (e) => {
  e.target
    .closest(".icon-next")
    .parentElement.querySelector(".icon-prev")
    .classList.add("active");
  const mainBanner = e.target
    .closest(".icon-next")
    .parentElement.querySelector(".main--with-banner-item");

  // dung setinterval de cho slide truot
  if (mainBanner.offsetWidth + mainBanner.scrollLeft < mainBanner.scrollWidth) {
    let x = setInterval(() => {
      mainBanner.scrollLeft += 3;
      if (
        mainBanner.offsetWidth + mainBanner.scrollLeft >=
        mainBanner.scrollWidth
      ) {
        mainBanner.parentElement
          .querySelector(".icon-next")
          .classList.remove("active");
        clearInterval(x);
      }
    }, 1);
  }
};

const prevSlided = () => (e) => {
  e.target
    .closest(".icon-prev")
    .parentElement.querySelector(".icon-next")
    .classList.add("active");
  const mainBanner = e.target
    .closest(".icon-prev")
    .parentElement.querySelector(".main--with-banner-item");

  // dung setinterval de cho slide truot
  if (mainBanner.scrollLeft > 0) {
    let x = setInterval(() => {
      mainBanner.scrollLeft -= 3;
      if (mainBanner.scrollLeft <= 0) {
        mainBanner.parentElement
          .querySelector(".icon-prev")
          .classList.remove("active");
        clearInterval(x);
      }
    }, 1);
  }
};

//hien modal
const fadeModal = (id) => (e) => {
  const modal = e.target.closest("#app").querySelector(".modal");
  const modalContents = modal.querySelectorAll(".modal__content");
  console.log(modalContents);
  for (let i = 0; i < modalContents.length; i++) {
    modalContents[i].classList.remove("active");
  }

  modal.classList.add("active");

  modalContents[id - 1].classList.add("active");
  e.stopPropagation();
};

//an modal
const hiddenModal = () => (e) => {
  e.stopPropagation();
  e.target.closest(".modal").classList.remove("active");
};

// stopProp
const stopProp = () => (e) => {
  e.stopPropagation();
};

// hien miniProfile
const fadeMiniProfile = (id) => (e) => {
  if (e.target.closest(".header__user-" + id)) {
    const miniProfile = e.target
      .closest(".header__user-" + id)
      .querySelector(".header__user--hover");
    miniProfile.classList.add("active");
  }

  if (e.target.closest(".item__inf-" + id)) {
    const miniProfile = e.target
      .closest(".item__inf-" + id)
      .querySelector(".item__inf--absolute");
    miniProfile.classList.add("active");
  }
};

//an miniprofile
const hiddenMiniProfile = (id) => (e) => {
  if (e.target.closest(".header__user-" + id)) {
    const miniProfile = e.target
      .closest(".header__user-" + id)
      .querySelector(".header__user--hover");
    miniProfile.classList.remove("active");
  }

  if (e.target.closest(".item__inf-" + id)) {
    const miniProfile = e.target
      .closest(".item__inf-" + id)
      .querySelector(".item__inf--absolute");
    miniProfile.classList.remove("active");
  }
};

//logic hien lich su tim kiem
const filtered = (edge, index) => {
  return edge.owner.username.toLowerCase().includes(search);
};

const fadeHistory = (edges) => (e) => {
  let historyElm = e.target.closest("input");
  while (
    historyElm &&
    !historyElm.matches(".header--with-input") &&
    !historyElm.matches(".nav--absolute")
  ) {
    historyElm = historyElm.parentElement;
  }

  historyElm = historyElm.querySelector(".header--with-input--absolute");

  historyElm.classList.add("active");
  search = e.target.closest("input").value.trim().toLowerCase();
  if (edges.filter(filtered).length > 0) {
    isHasHtr = true;
  } else {
    isHasHtr = false;
  }
  start();
};

const hiddenHistory = () => (e) => {
  let historyElm = e.target;
  while (historyElm && !historyElm.matches(".header--with-input")) {
    historyElm = historyElm.parentElement;
  }
  if (historyElm) {
    historyElm = historyElm.querySelector(".header--with-input--absolute");

    historyElm.classList.remove("active");
    e.target.closest("input").value = "";
  }
};

//history pc
const fadeHistoryPC = (edges) => (e) => {
  const navWithSearch = e.target.closest(".nav");
  navWithSearch.classList.add("searched");
};

const hiddenSearch = () => (e) => {
  const navWithSearch = document.querySelector("nav.nav");
  navWithSearch.classList.remove("searched");
};
