import { useState } from 'react';

const MENU_DATA = [
  { id: "binh-minh-vo-chu", icon: "⚖️", title: "AI Tòa Án Thiên Kiến", period: "2043" },
  { id: "trat-tu-tu-phat", icon: "🛡️", title: "Đại Dịch Không Biên Giới", period: "2041" },
  { id: "kinh-te-tu-do", icon: "📈", title: "AI Giáo Dục Của Tập Đoàn", period: "2040" },
  { id: "cong-dong-tu-tri", icon: "👥", title: "Sụp Đổ AI Quản Trị", period: "2050" },
  { id: "xung-dot-y-thuc-he", icon: "✊", title: "aI Lương Thực Độc Quyền", period: "2042" },
  { id: "ky-nguyen-moi", icon: "🌐", title: "AI Cảnh Sát Dự Đoán", period: "2047" },
];

interface MenuProps {
  onStartGame: (index: number) => void;
}

export default function Menu({ onStartGame }: MenuProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="bg-menu" className="bg-full"></div>
      <div id="overlay"></div>

      <button className="btn-corner btn-handbook" onClick={() => alert('Cẩm nang sẽ sớm ra mắt!')}>
        📖 CẨM NANG
      </button>
      <button className="btn-corner btn-settings" onClick={() => alert('Cài đặt đang xây dựng')}>
        ⚙️ Cài đặt
      </button>
      <button className="btn-corner btn-trophy" onClick={() => alert('Thành tích đang xây dựng')}>
        🏆 THÀNH TÍCH
      </button>

      <div id="wrap">
        <h1 className="main-title">THẾ GIỚI<br />NHÀ NƯỚC VÀ AI TRONG TƯƠNG LAI</h1>
        <p className="subtitle">6 tình huống. 24 lựa chọn. Nhiều kết cục. Bạn sẽ chọn con đường nào?</p>
        <div className="section-label">CHỌN MỘT TÌNH HUỐNG ĐỂ BẮT ĐẦU</div>

        <div className="cards" id="cards">
          {MENU_DATA.map((s, i) => (
            <div className="card" key={s.id}>
              <span className="card-num">0{i + 1}</span>
              <div className="card-icon">{s.icon}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-period">NĂM: {s.period}</div>
              <button className="card-btn" onClick={() => onStartGame(i)}>BẮT ĐẦU &gt;</button>
            </div>
          ))}
        </div>

        <div className="hint">
          <div className="hint-circle">?</div>
          <div>
            Mỗi lựa chọn của bạn sẽ dẫn đến những kết cục khác nhau.<br />
            Hãy suy nghĩ kỹ và khám phá mọi khả năng!
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-bg show" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
          <div className="modal">
            <div className="modal-icon" id="m-icon"></div>
            <h2 id="m-title"></h2>
            <p id="m-desc"></p>
            <div className="modal-actions">
              <button className="modal-cancel" onClick={() => setShowModal(false)}>Quay lại</button>
              <button className="modal-start">BẮT ĐẦU &gt;</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}