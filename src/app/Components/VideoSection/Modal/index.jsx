export default function VideoModal({ isTrue, iframeSrc, handelClose }) {
  return (
    <>
      <div className={`cs_video_popup ${isTrue === true ? 'active' : ''}`}>
        <div className="cs_video_popup-overlay" />
        <div className="cs_video_popup-content">
          <div className="cs_video_popup-layer" />
          <div className="cs_video_popup-container">
            <div className="cs_video_popup-align">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/IpoeMo8-R3w?si=MFtMt9IYCP96Yddt"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="cs_video_popup-close" onClick={handelClose} />
          </div>
        </div>
      </div>
    </>
  );
}
