const url = new URL(location.href);
const id = url.searchParams.get("id");

async function startDetail() {
  const data = await fetch(api, {
    method: "GET",
    headers: headersList,
  })
    .then((respon) => respon.json())
    .then((data) => data);

  const edgeId = await fetch(api + "/" + id, {
    method: "GET",
    headers: headersList,
  })
    .then((respon) => respon.json())
    .then((data) => data);
  const edges = data;
  edges.search = search;

  renderApp(<AppDetail edges={edges} edgeId={edgeId} />, appReact);
}

startDetail();

function AppDetail({ edges, edgeId }) {
  return (
    <React.Fragment>
      <HeaderDetail edgeId={edgeId} />
      <Nav edges={edges} />
      <MainDetail edgeId={edgeId} />
    </React.Fragment>
  );
}

function HeaderDetail({ edgeId }) {
  return (
    <header className="header--with-detail">
      <div className="detail-header">
        <a href="index.html" className="detail-header__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </a>

        <div className="detail-header__title">
          <h2>{edgeId.owner.username}</h2>
        </div>
      </div>
    </header>
  );
}

function MainDetail({ edgeId }) {
  return (
    <main className="main">
      <div className="main--wrap">
        <MainHead edgeId={edgeId} />
        <MainBody edgeId={edgeId} />
      </div>
    </main>
  );
}

function MainHead({ edgeId }) {
  return (
    <div className="main__head">
      <div className="main__head__user row row-around">
        <UserAvatar edge={edgeId} />
        <div className="user__inf">
          <div className="user__inf__head">
            <div className="head--text">
              <h4>{edgeId.owner.username}</h4>
            </div>

            <div className="head--icon icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <div className="user__inf__body mt-12 row row-between">
              <div className="body__btn">
                <span>Đang theo dõi</span>
              </div>
              <div className="body__btn">
                <span>Nhắn tin</span>
              </div>
              <div className="body__btn">
                <span>Thêm bạn bè</span>
              </div>
            </div>
          </div>

          <MainHeadFollow edgeId={edgeId} option="Tablet+PC" />

          <div className="user__inf--with-slogan main__head__about about--not-mobile mt-32">
            <div className="about--name">
              <h4>{edgeId.owner.username}</h4>
            </div>

            <div className="about--desc">
              <span>{edgeId.slogan}</span>
            </div>

            <div className="about--view mt-12">
              <span>
                Có <a href="#">nguyenlienlien97</a>, <a href="#">bui8162</a>,{" "}
                <a href="">anhanxuanloc1996</a> và{" "}
                <a href="">
                  {" "}
                  {(edgeId.edge_media_to_comment.count > 1000000 &&
                    Math.floor(edgeId.edge_media_to_comment.count / 1000000) +
                      " " +
                      "triệu") ||
                    (edgeId.edge_media_to_comment.count > 1000 &&
                      Math.floor(edgeId.edge_media_to_comment.count / 1000) +
                        "K") ||
                    (edgeId.edge_media_to_comment.count > 0 &&
                      edgeId.edge_media_to_comment.count)}
                </a>{" "}
                bạn bè bạn theo dõi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="main__head__about mt-32">
        <div className="about--name">
          <h4>{edgeId.owner.username}</h4>
        </div>

        <div className="about--desc">
          <span>{edgeId.slogan}</span>
        </div>

        <div className="about--view mt-12">
          <span>
            Có <a href="#">nguyenlienlien97</a>, <a href="#">bui8162</a>,{" "}
            <a href="">anhanxuanloc1996</a> và{" "}
            <a href="">
              {" "}
              {(edgeId.edge_media_to_comment.count > 1000000 &&
                Math.floor(edgeId.edge_media_to_comment.count / 1000000) +
                  " " +
                  "triệu") ||
                (edgeId.edge_media_to_comment.count > 1000 &&
                  Math.floor(edgeId.edge_media_to_comment.count / 1000) +
                    "K") ||
                (edgeId.edge_media_to_comment.count > 0 &&
                  edgeId.edge_media_to_comment.count)}
            </a>{" "}
            bạn bè bạn theo dõi
          </span>
        </div>
      </div>
    </div>
  );
}

function MainBody({ edgeId }) {
  return (
    <div className="main__body">
      <MainBodyHead edgeId={edgeId} option="mobile" />
      <MainBodyContent edgeId={edgeId} />
    </div>
  );
}

function MainBodyHead({ edgeId, option }) {
  return (
    <div
      className={
        option === "mobile"
          ? "main__body__head row row-between"
          : "user__inf--with-follow main__body__head row row-between"
      }
    >
      <div className="body__head__item col col-center">
        <div className="item--number">
          <span>{edgeId.pinned_for_users.length || 0}</span>
        </div>

        <div className="item--text">
          <span>Posts</span>
        </div>
      </div>

      <div className="body__head__item col col-center">
        <div className="item--number">
          <span>
            {(edgeId.edge_media_preview_like.count > 1000000 &&
              Math.floor(edgeId.edge_media_preview_like.count / 1000000) +
                " " +
                "triệu") ||
              (edgeId.edge_media_preview_like.count > 1000 &&
                Math.floor(edgeId.edge_media_preview_like.count / 1000) +
                  "K") ||
              (edgeId.edge_media_preview_like.count > 0 &&
                edgeId.edge_media_preview_like.count)}
          </span>
        </div>

        <div className="item--text">
          <span>Following</span>
        </div>
      </div>

      <div className="body__head__item col col-center">
        <div className="item--number">
          <span>
            {(edgeId.edge_media_to_comment.count > 1000000 &&
              Math.floor(edgeId.edge_media_to_comment.count / 1000000) +
                " " +
                "triệu") ||
              (edgeId.edge_media_to_comment.count > 1000 &&
                Math.floor(edgeId.edge_media_to_comment.count / 1000) + "K") ||
              (edgeId.edge_media_to_comment.count > 0 &&
                edgeId.edge_media_to_comment.count)}
          </span>
        </div>

        <div className="item--text">
          <span>Your friends are following</span>
        </div>
      </div>
    </div>
  );
}

function MainHeadFollow({ edgeId, option }) {
  return MainBodyHead({ edgeId, option });
}

function MainBodyContent({ edgeId }) {
  return (
    <div className="main__body__content">
      <div className="content__head--icon row row-between">
        <div className="content__head__item  grid grid-center">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-grid-3x3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" />
            </svg>
          </div>
        </div>

        <div className="content__head__item grid grid-center">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-person-rolodex"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="content__body--img grid s4-4-4">
        {edgeId.pinned_for_users.map((image, index) => (
          <div className="content__body__item" key={index}>
            <img
              crossOrigin="anonymous"
              src={image.src}
              alt={edgeId.owner.username}
            />

            <div className="content__body__item--absl">
              <div className="absl-like row">
                <div className="like--number">
                  <span>
                    {(Number(edgeId.edge_media_preview_like.count) > 1000000 &&
                      Math.floor(
                        Number(edgeId.edge_media_preview_like.count) / 1000000
                      ) + " triệu like") ||
                      (Number(edgeId.edge_media_preview_like.count) > 1000 &&
                        (
                          Number(edgeId.edge_media_preview_like.count) / 1000
                        ).toFixed(1) + "K like")}{" "}
                  </span>
                </div>
                <div className="like--icon icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  startDetail();
};
