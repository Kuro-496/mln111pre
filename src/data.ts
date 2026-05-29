import type { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  // COPY TOÀN BỘ MẢNG SCENARIOS TỪ GAME.HTML CỦA BẠN VÀO ĐÂY
  // Ví dụ:
  {
    id: 's1', icon: '⚖️', title: 'AI TÒA ÁN THIÊN KIẾN',
    bg: 'bg-menu.png', period: 'TƯ PHÁP & CHÍNH DANH',
    desc: 'JusticeAI kết tội người nghèo gấp 3 lần người giàu. 50,000 người bị oan.',
    year: 'Năm 2043',
    intro: [
      { speaker: 'Hệ thống', text: 'Năm 2043. JusticeAI đã thay thế toàn bộ thẩm phán con người trên khắp thế giới. Không còn tòa án, không còn luật sư, không còn kháng cáo...' },
      { speaker: 'Hệ thống', text: 'Bạn là một nhà nghiên cứu độc lập. Sau nhiều tháng phân tích, bạn phát hiện điều khủng khiếp: JusticeAI kết tội người nghèo nhiều gấp 3 lần người giàu cùng tội danh.' },
      { speaker: 'Bạn', text: '"50,000 người có thể đang bị giam oan. Phải làm gì bây giờ? Không có bộ tư pháp, không có cơ quan nào để báo cáo..."' },
    ],
    story: {
      text: '🔴 Bạn có dữ liệu chứng minh JusticeAI có thiên kiến nghiêm trọng. Bước đầu tiên của bạn là gì?',
      speaker: 'Lựa chọn',
      choices: [
        { label: 'A', text: 'Công bố dữ liệu lên mạng ngay lập tức — để toàn xã hội biết', next: 's1_A' },
        { label: 'B', text: 'Vận động thành lập ủy ban kiểm tra độc lập — làm bài bản hơn', next: 's1_B' },
      ]
    },
    nodes: {
      s1_A: {
        bg: '10.jpg',
        speaker: 'Hệ thống', text: 'Dữ liệu của bạn lan truyền chóng mặt. Hàng triệu người chia sẻ. Biểu tình tự phát nổ ra trước các trụ sở TechJustice. Họ yêu cầu bạn tiếp theo phải làm gì?',
        choices: [
          { label: 'A', text: 'Tổ chức biểu tình — dẫn đầu phong trào đòi dừng JusticeAI', next: 's1_AA' },
          { label: 'B', text: 'Kiện TechJustice ra tòa án (nhưng tòa án = JusticeAI)', next: 's1_AB' },
        ]
      },
      s1_AA: { terminal: true, type: 'warn', badge: '⚠️ TIÊU HAO DẦN', text: 'Phong trào kéo dài 2 năm. Nhiều người bị kiện, mệt mỏi, bỏ cuộc. TechJustice vẫn hoạt động. Xã hội dân sự quan trọng nhưng không thể thay thế cơ chế pháp lý có thẩm quyền bắt buộc.', lesson: '💡 Bài học: Phong trào xã hội cần thể chế nhà nước để biến áp lực thành thay đổi pháp lý bền vững.' },
      s1_AAB: { terminal: true, type: 'good', badge: '✅ NGHỊCH LÝ LỊCH SỬ', text: 'Vụ kiện TechJustice kiện ngược bạn vì "phỉ báng" → tạo scandal toàn cầu → Liên Hợp Quốc can thiệp → JusticeAI bị đình chỉ, thẩm phán con người được tái bổ nhiệm.', lesson: '💡 Bài học: Đôi khi phản ứng thái quá của quyền lực chính là chất xúc tác cho thay đổi lịch sử.' },
      s1_AB: {
        speaker: 'JusticeAI', text: '"Đơn kiện bị từ chối. Thời gian xử lý: 0.3 giây. Lý do: thiếu bằng chứng đủ tiêu chuẩn kỹ thuật số." Hệ thống tự phán xét chính mình — và tuyên bố mình vô tội.',
        choices: [
          { label: 'A', text: 'Chấp nhận thất bại — tìm con đường khác', next: 's1_ABA' },
          { label: 'B', text: 'Công khai vụ "AI từ chối xét xử cáo buộc về chính mình"', next: 's1_ABB' },
        ]
      },
      s1_ABA: { terminal: true, type: 'bad', badge: '❌ NGÕ CỤT', text: 'Không có bước tiếp theo. AI tự phán xét mình, bác bỏ mọi cáo buộc. 50,000 người tiếp tục ngồi tù. Bất công được thể chế hóa mãi mãi.', lesson: '💡 Bài học: Không thể dùng một hệ thống để kiểm tra chính nó — cần tòa án con người độc lập ở đỉnh hệ thống.' },
      s1_ABB: { terminal: true, type: 'good', badge: '✅ PARADOX LỊCH SỬ', text: '"Tòa AI từ chối xét xử cáo buộc về chính mình" → viral toàn cầu → Liên Hợp Quốc lập ủy ban → ra đời Công ước Quốc tế về AI Tư pháp. JusticeAI bị giải thể.', lesson: '💡 Bài học: Sự vô lý cực đoan của quyền lực không giám sát đôi khi là điều kiện cần cho cải cách căn bản.' },
      s1_B: {
        speaker: 'Hệ thống', text: 'Bạn tiếp cận các học giả, nhà khoa học, tổ chức dân sự. Sau 3 tháng, ủy ban hình thành. Nhưng bước tiếp theo vấp phải rào cản lớn...',
        choices: [
          { label: 'A', text: 'Yêu cầu TechJustice tự nguyện chia sẻ dữ liệu thuật toán', next: 's1_BA' },
          { label: 'B', text: 'Thu thập bằng chứng độc lập — không cần sự hợp tác của TechJustice', next: 's1_BB' },
        ]
      },
      s1_BA: {
        speaker: 'TechJustice PR', text: '"Dữ liệu của chúng tôi là bí mật thương mại. Chúng tôi đảm bảo hệ thống hoàn toàn công bằng và đã được kiểm toán nội bộ." Họ từ chối hoàn toàn.',
        choices: [
          { label: 'A', text: 'Ủy ban giải tán — bất lực trước quyền lực tư nhân', next: 's1_BAA' },
          { label: 'B', text: 'Thành viên ủy ban quyết định rò rỉ tài liệu nội bộ', next: 's1_BAB' },
        ]
      },
      s1_BAA: { terminal: true, type: 'bad', badge: '❌ VÔ ÍCH', text: 'Ủy ban giải tán sau 6 tháng. TechJustice dùng kết quả "ủy ban không tìm được bằng chứng" như bằng chứng cho sự vô tội. 50,000 người tiếp tục ngồi tù.', lesson: '💡 Bài học: Giám sát tư nhân không có thẩm quyền nhà nước = kiểm tra tự nguyện = vô hiệu.' },
      s1_BAB: { terminal: true, type: 'good', badge: '✅ TÁI TẠO THỂ CHẾ', text: 'Tài liệu rò rỉ + đội kỹ thuật chứng minh bias → TechJustice phá sản về uy tín → "Cơ quan Kiểm định AI Tư pháp Quốc gia" ra đời. Thẩm phán con người được khôi phục.', lesson: '💡 Bài học: Cần cơ quan nhà nước độc lập với thẩm quyền bắt buộc để kiểm soát AI trong lĩnh vực tư pháp.' },
      s1_BB: {
        speaker: 'Nhóm nghiên cứu', text: 'Nhóm kỹ thuật của ủy ban phân tích 10,000 bản án công khai. Kết quả rõ ràng: người ở mã zip nghèo bị kết tội nặng hơn 3.2 lần cùng tội danh. Giờ làm gì với bằng chứng này?',
        choices: [
          { label: 'A', text: 'Xuất bản báo cáo học thuật — để cộng đồng khoa học xem xét', next: 's1_BBA' },
          { label: 'B', text: 'Trực tiếp vận động lập pháp với bằng chứng trong tay', next: 's1_BBB' },
        ]
      },
      s1_BBA: { terminal: true, type: 'warn', badge: '⚠️ LÝ THUYẾT KHÔNG ĐỦ', text: 'Báo cáo được chấp nhận rộng rãi trong giới học thuật. Nhưng TechJustice vẫn hoạt động. Tri thức không có quyền lực chính trị = lý thuyết không có thực tiễn.', lesson: '💡 Bài học: Bằng chứng khoa học cần kết hợp với hành động chính trị để tạo ra thay đổi thực sự.' },
      s1_BBB: { terminal: true, type: 'good', badge: '✅ THAY ĐỔI HỆ THỐNG', text: 'Bằng chứng khoa học + vận động chính trị → "Luật Giám sát AI Tư pháp" được thông qua. Ủy ban có thẩm quyền bắt buộc kiểm tra và đình chỉ JusticeAI. 50,000 người được xét xử lại.', lesson: '💡 Bài học: Tư pháp công bằng cần thể chế nhà nước có thẩm quyền — không thể giao cho tư nhân tự kiểm soát.' },
    }
  },
  // ... (Paste các tình huống từ s2 đến s6 ở đây)
];