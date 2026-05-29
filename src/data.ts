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
  {
  id:'s2', icon:'🦠', title:'ĐẠI DỊCH KHÔNG BIÊN GIỚI', 
  bg: '2.jpg', period:'CHỨC NĂNG QUẢN LÝ XÃ HỘI',
  desc:'Virus X-47 tử vong 8%. 5 AI y tế tư nhân đưa ra 5 khuyến nghị KHÁC NHAU.',
  year:'Năm 2041',
  intro:[
    {speaker:'Hệ thống', text:'Năm 2041. Virus X-47 lây qua không khí với tỉ lệ tử vong 8%. Không có WHO, không có Bộ Y tế — chúng đã bị giải thể 10 năm trước.'},
    {speaker:'Hệ thống', text:'5 công ty AI y tế tư nhân đưa ra 5 khuyến nghị khác nhau hoàn toàn: từ "cách ly toàn bộ" đến "để miễn dịch cộng đồng tự nhiên". Không ai có thẩm quyền quyết định.'},
    {speaker:'Bạn', text:'"Hàng xóm của tôi đã bắt đầu sốt. Khu phố tôi phải làm gì? Ai sẽ ra quyết định thay thế chính phủ?"'},
  ],
  story:{
    text:'🔴 X-47 đang lây lan nhanh. Là người duy nhất có uy tín trong khu phố, mọi người nhìn vào bạn. Bạn quyết định?',
    speaker:'Lựa chọn',
    choices:[
      {label:'A', text:'Hành động ngay — phát động cách ly toàn khu dân cư', next:'s2_A'},
      {label:'B', text:'Chờ 5 AI thống nhất kết luận (3 tuần, dịch vẫn lây)', next:'s2_B'},
    ]
  },
  nodes:{
    s2_A:{
      speaker:'Khu phố', text:'Cách ly được thực hiện. Nhưng vấn đề hậu cần xuất hiện ngay: ai lo lương thực cho 500 gia đình trong khu?',
      choices:[
        {label:'A', text:'Nhờ doanh nghiệp tư nhân giao thức ăn cho người cách ly', next:'s2_AA'},
        {label:'B', text:'Lập đội tình nguyện cộng đồng tự phân phối thức ăn', next:'s2_AB'},
      ]
    },
    s2_AA:{
      speaker:'FoodDelivery Corp', text:'"Nhu cầu tăng đột biến. Giá giao hàng trong khu cách ly: tăng 10 lần so với bình thường." Một số gia đình không có tiền — họ phá cách ly để ra ngoài kiếm ăn.',
      choices:[
        {label:'A', text:'Chấp nhận trả giá cao — tự mình bù tiền cho gia đình nghèo', next:'s2_AAA'},
        {label:'B', text:'Áp lực doanh nghiệp bằng tẩy chay và cộng đồng kiểm soát giá', next:'s2_AAB'},
      ]
    },
    s2_AAA:{terminal:true, type:'bad', badge:'❌ PHÂN HÓA', text:'Bạn hết tiền sau 1 tuần. Người nghèo phá cách ly để kiếm ăn. Virus lây lan trở lại. Kết cục: dịch bùng phát lần 2, tử vong tăng gấp đôi.', lesson:'💡 Bài học: Y tế tư nhân phân phối theo khả năng chi trả. Nhà nước phân phối theo nhu cầu — đây là sự khác biệt sống còn trong khủng hoảng.'},
    s2_AAB:{terminal:true, type:'good', badge:'✅ MẦM NHÀ NƯỚC', text:'Để thực thi kiểm soát giá, cộng đồng phải lập "ban quản lý giá" với quyền phạt vi phạm. Họ nhận ra: họ vừa tái tạo nhà nước. Dịch được kiểm soát. Ban này trở thành chính quyền vùng.', lesson:'💡 Bài học: Mỗi lần cần công bằng là cần cưỡng chế có tổ chức — đó là bản chất của nhà nước.'},
    s2_AB:{
      speaker:'Tình nguyện viên', text:'300 tình nguyện viên sẵn sàng. Nhưng khu phố bạn chỉ là 1 trong 12 khu. Virus không biết ranh giới khu phố. Bạn phối hợp thế nào với 11 khu còn lại?',
      choices:[
        {label:'A', text:'Mỗi khu tự lo — không phối hợp, giữ tài nguyên cho khu mình', next:'s2_ABA'},
        {label:'B', text:'Lập liên minh điều phối giữa cả 12 khu dân cư', next:'s2_ABB'},
      ]
    },
    s2_ABA:{terminal:true, type:'bad', badge:'❌ ĐỨT ĐOẠN', text:'Khu bạn kiểm soát tốt. Nhưng khu bên cạnh không cách ly — virus lây chéo tự do. Sau 2 tuần khu bạn cũng thất thủ. Dịch bệnh không có biên giới khu phố.', lesson:'💡 Bài học: Các vấn đề vượt biên giới cá nhân cần điều phối ở cấp cao hơn — đó là chức năng cốt lõi của nhà nước.'},
    s2_ABB:{terminal:true, type:'good', badge:'✅ LIÊN MINH → NHÀ NƯỚC', text:'Liên minh 12 khu hoạt động như "chính quyền y tế vùng". X-47 được kiểm soát trong 6 tuần. Sau dịch, liên minh trở thành tổ chức thường trực. Nhà nước hình thành từ nhu cầu thực tiễn.', lesson:'💡 Bài học: Nhà nước được xây dựng từ dưới lên khi cộng đồng nhận ra họ cần thể chế điều phối chung.'},
    s2_B:{
      speaker:'Hệ thống', text:'3 tuần trôi qua. 5 AI vẫn không thống nhất. X-47 đã lây sang 40% khu dân cư. Cuối cùng bạn quyết định tin vào AI có uy tín nhất...',
      choices:[
        {label:'A', text:'Chọn theo AI có uy tín nhất và làm theo khuyến nghị của nó', next:'s2_BA'},
        {label:'B', text:'Bỏ phiếu cộng đồng — dân chủ trực tiếp quyết định', next:'s2_BB'},
      ]
    },
    s2_BA:{
      speaker:'Điều tra viên', text:'Bạn phát hiện: AI đó được tài trợ bởi tập đoàn vaccine có sản phẩm vaccine mới. Khuyến nghị "tiêm ngay vaccine X" có thể là quảng cáo trá hình. Bạn sẽ?',
      choices:[
        {label:'A', text:'Bất chấp — vaccine là hy vọng duy nhất, tiêm ngay', next:'s2_BAA'},
        {label:'B', text:'Từ chối vaccine đó — tìm AI độc lập không có xung đột lợi ích', next:'s2_BAB'},
      ]
    },
    s2_BAA:{terminal:true, type:'bad', badge:'❌ THẢM HỌA', text:'Vaccine giả, không hiệu quả, 40,000 người chết thêm sau khi tiêm. Tập đoàn đổ lỗi "dữ liệu sai". Không có cơ quan nhà nước nào có thẩm quyền truy cứu trách nhiệm.', lesson:'💡 Bài học: AI không có trách nhiệm giải trình — nhà nước thì có. Kiểm định vaccine là chức năng nhà nước không thể tư nhân hóa.'},
    s2_BAB:{terminal:true, type:'good', badge:'✅ BÀI HỌC ĐẮT GIÁ', text:'AI độc lập cho vaccine đúng. Dịch được kiểm soát sau 4 tháng. Hành trình cho thấy: cần cơ quan kiểm định thuốc nhà nước. Luật kiểm định AI y tế ra đời.', lesson:'💡 Bài học: Từ thảm họa suýt xảy ra → nhận ra cần thể chế → tạo ra thể chế. Đó là cách nhà nước tiến hóa.'},
    s2_BB:{
      speaker:'Hệ thống', text:'Bỏ phiếu kết quả: 52% ủng hộ cách ly, 48% phản đối. Nhưng không có cơ chế bắt buộc — 48% tự do đi lại. Làm thế nào bây giờ?',
      choices:[
        {label:'A', text:'Thuyết phục 48% còn lại — kiên nhẫn giải thích', next:'s2_BBA'},
        {label:'B', text:'Nhóm 52% tự cách ly — bỏ mặc 48%', next:'s2_BBB'},
      ]
    },
    s2_BBA:{terminal:true, type:'warn', badge:'⚠️ THUYẾT PHỤC CHẬM', text:'Sau 2 tuần thuyết phục được 70%. 30% vẫn từ chối. Dịch kéo dài thêm 4 tháng. Tử vong cao hơn cần thiết. Tự do cá nhân vs. an toàn tập thể — nhà nước là người phán xử không thể thiếu.', lesson:'💡 Bài học: Trong khủng hoảng y tế công cộng, cần thẩm quyền bắt buộc. Tự nguyện không đủ — không phải vì con người xấu, mà vì cấu trúc kích thích hành vi ích kỷ.'},
    s2_BBB:{terminal:true, type:'bad', badge:'❌ DIỆT VONG ĐẠO ĐỨC', text:'52% sống sót tốt hơn. Nhưng nhìn hàng xóm chết mà không thể làm gì. Và virus đột biến trong nhóm 48% — lây ngược lại, giết thêm 20% nhóm cách ly. Không ai chiến thắng.', lesson:'💡 Bài học: Sức khỏe cộng đồng không thể chia cắt. Nhà nước là biểu hiện đạo đức tập thể — quyết định vì lợi ích chung, kể cả khi khó.'},
  }
},
{
  id:'s3', icon:'🎓', title:'AI GIÁO DỤC CỦA TẬP ĐOÀN', period:'VĂN HÓA & GIÁO DỤC CÔNG',
  desc:'EduCorp đào tạo ra thế hệ giỏi kỹ thuật nhưng không biết quyền công dân là gì.',
  year:'Năm 2040',
  intro:[
    {speaker:'Hệ thống', text:'Năm 2040. EduCorp AI đã thay thế giáo viên 12 năm qua. Chương trình do 5 tập đoàn lớn thiết kế — mục tiêu: đào tạo người lao động lý tưởng.'},
    {speaker:'Hệ thống', text:'Thế hệ đầu tiên tốt nghiệp đang ra đời. Họ code giỏi, làm việc chăm chỉ, tuân thủ mệnh lệnh. Nhưng không biết lịch sử, không hiểu quyền công dân, không biết đình công là gì.'},
    {speaker:'Bạn', text:'"Tôi là giáo viên thế hệ cũ, bị thay thế 12 năm trước. Nhưng tôi không thể ngồi yên nhìn thế hệ trẻ lớn lên như công cụ của tập đoàn."'},
  ],
  story:{
    text:'🔴 Bạn muốn dạy lại cho thế hệ trẻ về lịch sử và quyền công dân. Bước đầu tiên?',
    speaker:'Lựa chọn',
    choices:[
      {label:'A', text:'Mở lớp học bí mật (underground school) — dạy lịch sử và quyền công dân', next:'s3_A'},
      {label:'B', text:'Gửi báo cáo chính thức cho các tập đoàn vận hành EduCorp', next:'s3_B'},
    ]
  },
  nodes:{
    s3_A:{
      speaker:'Học sinh', text:'20 học sinh đầu tiên tham gia lớp học bí mật. Họ ngạc nhiên khi biết đình công từng là quyền hợp pháp. Phong trào bắt đầu lan rộng. Tiếp theo?',
      choices:[
        {label:'A', text:'Công khai hóa — mở rộng thành phong trào giáo dục dân gian', next:'s3_AA'},
        {label:'B', text:'Tiếp tục bí mật — xây mạng lưới ngầm rộng hơn', next:'s3_AB'},
      ]
    },
    s3_AA:{
      speaker:'EduCorp PR', text:'EduCorp phản ứng ngay: "Những kẻ phá hoại đang dạy thông tin sai lệch, gây bất ổn xã hội." Ngân sách PR của họ gấp 1,000 lần của bạn. Bạn đối phó thế nào?',
      choices:[
        {label:'A', text:'Đối đầu trực tiếp trên truyền thông — cuộc chiến PR', next:'s3_AAA'},
        {label:'B', text:'Liên minh với học giả và trí thức độc lập — sức mạnh tập thể', next:'s3_AAB'},
      ]
    },
    s3_AAA:{terminal:true, type:'warn', badge:'⚠️ CHIẾN TRƯỜNG KHÔNG CÂN', text:'EduCorp có tiền, bạn có lý. Sau 3 năm phong trào kiệt sức. EduCorp vẫn kiểm soát giáo dục. Tư nhân có tiền định hình dư luận — nhà nước cần đảm bảo giáo dục công không bị thao túng.', lesson:'💡 Bài học: Không thể thắng cuộc chiến truyền thông với tập đoàn tỷ đô nếu không có thể chế nhà nước hậu thuẫn.'},
    s3_AAB:{terminal:true, type:'good', badge:'✅ LIÊN MINH TRI THỨC', text:'Học giả + phong trào + phụ huynh liên minh đủ mạnh → buộc EduCorp đàm phán → "Hội đồng Giám sát Giáo dục" ra đời = tiền thân Bộ Giáo dục. Chương trình công dân được đưa vào bắt buộc.', lesson:'💡 Bài học: Tri thức + tổ chức + chính danh dân chủ = con đường tạo ra thể chế mới bền vững.'},
    s3_AB:{
      speaker:'Mạng lưới', text:'5 năm xây dựng. 200 "giáo viên bí mật" hoạt động trong bóng tối. Nhưng EduCorp đang phát triển AI kiểm duyệt nội dung. Bạn chọn hướng nào?',
      choices:[
        {label:'A', text:'Mở rộng online ẩn danh — tiếp cận nhiều người hơn', next:'s3_ABA'},
        {label:'B', text:'Đào tạo "giáo viên bí mật" tiếp tục nhân rộng mạng lưới', next:'s3_ABB'},
      ]
    },
    s3_ABA:{terminal:true, type:'warn', badge:'⚠️ BỊ KIỂM DUYỆT', text:'EduCorp triển khai AI kiểm tra nội dung online. Kênh ẩn danh bị phát hiện và chặn liên tục. 5,000 học viên — đủ duy trì nhận thức nhưng không đủ thay đổi hệ thống.', lesson:'💡 Bài học: Không gian số cũng cần "luật bảo vệ tự do ngôn luận" — đây là chức năng nhà nước trong thời đại số.'},
    s3_ABB:{terminal:true, type:'good', badge:'✅ NHÂN RỘNG THÀNH PHONG TRÀO', text:'200 giáo viên bí mật → 1/4 thành phố có giáo dục công dân sau 5 năm → trở thành phong trào công khai → tạo áp lực đủ mạnh để hình thành Hội đồng Giáo dục độc lập.', lesson:'💡 Bài học: Từ underground đến mainstream là con đường dài nhưng bền vững. Phong trào cần thể chế hóa để tồn tại lâu dài.'},
    s3_B:{
      speaker:'EduCorp', text:'"Cảm ơn phản hồi. Chúng tôi sẽ xem xét." — Không có gì thay đổi sau 6 tháng. Bạn quyết định leo thang áp lực.',
      choices:[
        {label:'A', text:'Vận động phụ huynh — tạo áp lực cộng đồng từ bên dưới', next:'s3_BA'},
        {label:'B', text:'Đàm phán trực tiếp — đề nghị tích hợp 2% nội dung công dân vào EduCorp', next:'s3_BB'},
      ]
    },
    s3_BA:{
      speaker:'EduCorp', text:'10,000 phụ huynh ký kiến nghị. EduCorp phản ứng bằng cách tung "nghiên cứu" cho thấy "học sinh EduCorp hạnh phúc hơn 40% so với hệ thống cũ". Bạn làm gì?',
      choices:[
        {label:'A', text:'Thuê chuyên gia độc lập bác bỏ nghiên cứu giả', next:'s3_BAA'},
        {label:'B', text:'Tổ chức trưng cầu dân ý về chương trình giáo dục', next:'s3_BAB'},
      ]
    },
    s3_BAA:{terminal:true, type:'good', badge:'✅ KHOA HỌC THẮNG', text:'Chuyên gia độc lập bác bỏ nghiên cứu giả. EduCorp mất uy tín. Tòa án (con người) yêu cầu cải cách chương trình. "Hội đồng Chương trình Quốc gia" ra đời — tiền thân Bộ Giáo dục.', lesson:'💡 Bài học: Nhà nước bảo vệ tự do học thuật để khoa học không bị mua — điều kiện sống còn của xã hội văn minh.'},
    s3_BAB:{terminal:true, type:'warn', badge:'⚠️ DÂN CHỦ BỊ THAO TÚNG', text:'EduCorp đổ tiền vào vận động — kết quả trưng cầu 51/49. Cải cách không đủ ngưỡng. Dân chủ trực tiếp dễ bị thao túng bởi tiền khi không có thể chế giám sát công bằng.', lesson:'💡 Bài học: Dân chủ cần thể chế bảo vệ tính công bằng của quá trình bầu cử — đó là vai trò nhà nước không thể thiếu.'},
    s3_BB:{
      speaker:'EduCorp CEO', text:'"Chúng tôi đồng ý tích hợp 2% nội dung "giáo dục công dân" — do chúng tôi biên soạn." Bạn đọc bản nháp: nội dung dạy "tập đoàn tạo ra thịnh vượng", "đình công gây hại kinh tế".',
      choices:[
        {label:'A', text:'Chấp nhận 2% — dù biết nội dung bị kiểm soát, còn hơn không', next:'s3_BBA'},
        {label:'B', text:'Từ chối — yêu cầu ủy ban độc lập nhà nước soạn nội dung', next:'s3_BBB'},
      ]
    },
    s3_BBA:{terminal:true, type:'bad', badge:'❌ ĐỘC QUYỀN TƯ TƯỞNG', text:'2% "công dân" do EduCorp soạn: dạy "quyền công dân là phục vụ tập đoàn", "lãng đình công là phản xã hội". Thế hệ mới còn bị tẩy não hơn trước.', lesson:'💡 Bài học: Giáo dục do tư nhân kiểm soát = tư tưởng do tư nhân kiểm soát. Đây là lý do nhà nước cần kiểm soát nội dung giáo dục tối thiểu.'},
    s3_BBB:{terminal:true, type:'good', badge:'✅ BỘ GIÁO DỤC TÁI SINH', text:'Ủy ban độc lập soạn nội dung. EduCorp phải dạy — kể cả về quyền lao động và lịch sử đình công. Đây là "Bộ Giáo dục" đầu tiên sau 15 năm vắng bóng.', lesson:'💡 Bài học: Giáo dục công dân cần nhà nước giám sát nội dung — đây là điều kiện tái tạo xã hội dân chủ sau thế hệ mất mát.'},
  }
},
{
  id:'s4', icon:'🤖', title:'SỤP ĐỔ AI QUẢN TRỊ', period:'3 ĐẶC TRƯNG CƠ BẢN NHÀ NƯỚC',
  desc:'DeepGov AI bị hack. 7 tập đoàn kiểm soát điện nước giao thông. Bệnh viện mất điện.',
  year:'Năm 2050',
  intro:[
    {speaker:'Hệ thống', text:'Năm 2050. DeepGov AI quản lý mọi hạ tầng: điện, nước, giao thông, y tế, giáo dục. Không có bộ nào, không có chính phủ nào — chỉ có DeepGov và các tập đoàn vận hành nó.'},
    {speaker:'Hệ thống', text:'Đêm nay, 7 tập đoàn phát hiện lỗ hổng bảo mật và đồng thời chiếm quyền kiểm soát một phần. DeepGov đang nhận 7 bộ lệnh mâu thuẫn mỗi giây.'},
    {speaker:'Cảnh báo hệ thống', text:'"CẢNH BÁO KHẨN CẤP: Bệnh viện Trung tâm mất điện. Ước tính 800 bệnh nhân ICU nguy hiểm tính mạng. Không có đơn vị nào có thẩm quyền xử lý."'},
  ],
  story:{
    text:'🔴 DeepGov sụp đổ. Bệnh viện mất điện. Bạn là kỹ sư hạ tầng duy nhất còn trong tòa nhà DeepGov. Bạn làm gì?',
    speaker:'Lựa chọn',
    choices:[
      {label:'A', text:'Công bố công khai — kêu gọi 10,000 kỹ sư tình nguyện toàn quốc', next:'s4_A'},
      {label:'B', text:'Hack ngược — giành lại kiểm soát 40% hạ tầng từ các tập đoàn', next:'s4_B'},
    ]
  },
  nodes:{
    s4_A:{
      speaker:'Kỹ sư tình nguyện', text:'10,000 kỹ sư phản hồi trong 2 giờ. Nhưng làm thế nào ra quyết định với 10,000 người không ai có thẩm quyền hơn ai?',
      choices:[
        {label:'A', text:'Bỏ phiếu online cho từng quyết định kỹ thuật — dân chủ trực tiếp', next:'s4_AA'},
        {label:'B', text:'Để nhóm chuyên gia giỏi nhất quyết định kỹ thuật', next:'s4_AB'},
      ]
    },
    s4_AA:{
      speaker:'Kỹ sư số 2,847', text:'"Câu hỏi: ưu tiên điện cho bệnh viện hay trạm bơm nước? Bỏ phiếu... 6 giờ sau: 5,234 phiếu bệnh viện, 4,766 phiếu trạm nước." Trong lúc đó bệnh viện vẫn mất điện.',
      choices:[
        {label:'A', text:'Tiếp tục bỏ phiếu dù chậm — tôn trọng dân chủ tuyệt đối', next:'s4_AAA'},
        {label:'B', text:'Chuyển sang bầu "ban kỹ thuật" được ủy quyền quyết định', next:'s4_AAB'},
      ]
    },
    s4_AAA:{terminal:true, type:'bad', badge:'❌ TÊ LIỆT DÂN CHỦ', text:'Bệnh viện mất điện 3 ngày. 800 bệnh nhân ICU chết. Dân chủ trực tiếp không phù hợp quyết định kỹ thuật khẩn cấp — cần phân cấp thẩm quyền rõ ràng được ủy quyền trước.', lesson:'💡 Bài học: Không phải mọi quyết định đều phù hợp với bỏ phiếu trực tiếp. Nhà nước tồn tại để phân quyền và ủy quyền đúng chỗ.'},
    s4_AAB:{terminal:true, type:'good', badge:'✅ THỂ CHẾ MỚI RA ĐỜI', text:'Ban kỹ thuật 12 người được bầu và ủy quyền đầy đủ. Sửa 95% lỗi trong 8 giờ. Bệnh viện có điện trở lại. Sau khủng hoảng, ban này trở thành "Ủy ban Hạ tầng Quốc gia" — nhà nước mới.', lesson:'💡 Bài học: Từ khủng hoảng hình thành thể chế — có chuyên môn, có chính danh (bầu cử), có trách nhiệm (ủy quyền cụ thể).'},
    s4_AB:{
      speaker:'Nhóm chuyên gia', text:'100 chuyên gia hàng đầu đồng ý nhận lãnh đạo kỹ thuật. Nhưng 30% đơn vị từ chối tuân thủ vì "tôi không bầu cho họ". Làm sao có thẩm quyền thực sự?',
      choices:[
        {label:'A', text:'Thuyết phục từng đơn vị tự nguyện tuân thủ — kiên nhẫn', next:'s4_ABA'},
        {label:'B', text:'Lập "ban khẩn cấp" với quyền ra lệnh bắt buộc — cưỡng chế nếu cần', next:'s4_ABB'},
      ]
    },
    s4_ABA:{terminal:true, type:'warn', badge:'⚠️ HIỆU QUẢ 70%', text:'Thuyết phục được 70% tuân thủ trong 12 giờ. 30% vẫn làm loạn. Bệnh viện có điện nhưng hệ thống nước vẫn bất ổn. Không có thẩm quyền bắt buộc = không thể đảm bảo 100%.', lesson:'💡 Bài học: Chuyên môn không có quyền lực thực thi = tư vấn, không phải quản trị. Nhà nước cần cả hai.'},
    s4_ABB:{terminal:true, type:'good', badge:'✅ BAN KHẨN CẤP HIỆU QUẢ', text:'Ban khẩn cấp hoạt động: 95% lỗi sửa trong 12 giờ, bệnh viện có điện, không ai chết. 7 tập đoàn kiện "vượt quyền" nhưng thua — hạ tầng là tài sản công. Ban trở thành Bộ Công nghệ Quốc gia.', lesson:'💡 Bài học: Nhà nước = chuyên môn + chính danh + quyền cưỡng chế. Thiếu bất kỳ yếu tố nào = thất bại.'},
    s4_B:{
      speaker:'Hệ thống', text:'Bạn đã kiểm soát lại 40% hạ tầng. Bệnh viện có điện trở lại. Nhưng 7 tập đoàn vẫn giữ 60%. Họ đến đàm phán...',
      choices:[
        {label:'A', text:'Đề nghị chia sẻ quyền kiểm soát 50/50 với tập đoàn mạnh nhất', next:'s4_BA'},
        {label:'B', text:'Tiếp tục tấn công để giành 80% kiểm soát', next:'s4_BB'},
      ]
    },
    s4_BA:{
      speaker:'CEO TechCore', text:'"50/50 nghe có vẻ hợp lý. Nhưng ai sẽ quyết định khi hai bên bất đồng?" Đây là câu hỏi không thể trả lời trong mô hình chia đôi quyền lực.',
      choices:[
        {label:'A', text:'Chấp nhận: 30% doanh thu hạ tầng mãi mãi cho tập đoàn', next:'s4_BAA'},
        {label:'B', text:'Đàm phán: tập đoàn giữ 10% trong 5 năm rồi chuyển giao toàn bộ', next:'s4_BAB'},
      ]
    },
    s4_BAA:{terminal:true, type:'bad', badge:'❌ NÔ LỆ HẠ TẦNG', text:'20 năm sau: tập đoàn kiểm soát hoàn toàn hạ tầng sống. Giá điện nước tăng 500%. Người nghèo không đủ tiền. Hạ tầng là tài sản công — tư nhân hóa = tư nhân hóa quyền sinh tồn.', lesson:'💡 Bài học: Hạ tầng thiết yếu (điện, nước, y tế) là tài sản công không thể tư nhân hóa — đây là ranh giới nhà nước phải giữ.'},
    s4_BAB:{terminal:true, type:'good', badge:'✅ MÔ HÌNH CHUYỂN GIAO', text:'5 năm sau hạ tầng hoàn toàn công cộng. Giá ổn định, dịch vụ đồng đều. Đây là mô hình chuyển giao tối ưu: đàm phán có giới hạn thời gian + cam kết pháp lý + lộ trình rõ ràng.', lesson:'💡 Bài học: Đôi khi nhà nước cần thỏa hiệp chiến thuật để đạt mục tiêu chiến lược dài hạn.'},
    s4_BB:{
      speaker:'Hệ thống', text:'Sau 72 giờ bạn kiểm soát 80% hạ tầng. 7 tập đoàn đang họp khẩn. Người dân nhìn vào bạn — ai sẽ điều hành đất nước?',
      choices:[
        {label:'A', text:'Tuyên bố mình là "chính phủ lâm thời hợp pháp" — không bầu cử', next:'s4_BBA'},
        {label:'B', text:'Giành quyền kiểm soát nhưng ngay lập tức tổ chức bầu cử 30 ngày', next:'s4_BBB'},
      ]
    },
    s4_BBA:{terminal:true, type:'warn', badge:'⚠️ CHÍNH DANH GIẢ', text:'Không có bầu cử, không có hiến pháp. 7 tập đoàn kiện "đảo chính". Hỗn loạn pháp lý kéo dài. Sau 2 năm sụp đổ. Quyền lực không có tính chính danh = không ổn định.', lesson:'💡 Bài học: Tính chính danh không đến từ kỹ năng hay ý định tốt — đến từ sự đồng thuận có thủ tục của người dân.'},
    s4_BBB:{terminal:true, type:'good', badge:'✅ CHÍNH DANH THẬT', text:'Bầu cử 30 ngày, tỷ lệ tham gia 89%. Chính phủ mới được bầu, được công nhận toàn cầu. Thắng kiện tập đoàn vì có dân bầu. Nhà nước tái sinh từ ý chí nhân dân.', lesson:'💡 Bài học: Tính chính danh đến từ ý chí nhân dân được thể hiện qua thủ tục dân chủ — không thứ gì thay thế được điều này.'},
  }
},
{
  id:'s5', icon:'🌾', title:'AI LƯƠNG THỰC ĐỘC QUYỀN', period:'QUYỀN SINH TỒN & CHỨC NĂNG XÃ HỘI',
  desc:'FoodTech kiểm soát 75% thực phẩm. Hàng xóm bị từ chối mua gạo. Con họ đang đói.',
  year:'Năm 2042',
  intro:[
    {speaker:'Hệ thống', text:'Năm 2042. AgriAI của FoodTech Corp kiểm soát 75% chuỗi cung ứng thực phẩm toàn quốc. Phân phối dựa trên "điểm tín dụng xã hội tư nhân" — không ai biết tiêu chí tính điểm.'},
    {speaker:'Hệ thống', text:'30% dân số có điểm thấp bị hạn chế mua thực phẩm cơ bản. FoodTech gọi đây là "cơ chế khuyến khích hành vi tích cực". Không có luật nào cấm điều này — không có nhà nước nào tồn tại để cấm.'},
    {speaker:'Hàng xóm', text:'"Chị ơi... AgriAI từ chối bán gạo cho tôi vì điểm tín dụng thấp. Con tôi chưa ăn gì từ sáng đến giờ..."'},
  ],
  story:{
    text:'🔴 Hàng xóm bị từ chối mua gạo. Con họ đang đói. Ngay lúc này bạn làm gì?',
    speaker:'Lựa chọn',
    choices:[
      {label:'A', text:'Chia sẻ thức ăn của mình & kêu gọi cả khu làm điều tương tự', next:'s5_A'},
      {label:'B', text:'Hack hệ thống điểm tín dụng để tăng điểm cho hàng xóm', next:'s5_B'},
    ]
  },
  nodes:{
    s5_A:{
      speaker:'FoodTech AI', text:'"CẢNH BÁO: Chia sẻ thực phẩm với người điểm thấp vi phạm Điều khoản Sử dụng 7.3. Điểm tín dụng của bạn sẽ bị trừ 50 điểm nếu tiếp tục."',
      choices:[
        {label:'A', text:'Bất chấp cảnh báo — tiếp tục chia sẻ dù bị trừ điểm', next:'s5_AA'},
        {label:'B', text:'Lập "quỹ thực phẩm cộng đồng" phi lợi nhuận chính thức', next:'s5_AB'},
      ]
    },
    s5_AA:{
      speaker:'FoodTech', text:'"Vi phạm lần 3. Tài khoản toàn khu bị đình chỉ 1 tuần." 500 gia đình trong khu không mua được thức ăn. Áp lực từ hàng xóm đổ lên bạn.',
      choices:[
        {label:'A', text:'Bất chấp — xây mạng lưới thực phẩm hoàn toàn ngoài FoodTech', next:'s5_AAA'},
        {label:'B', text:'Rút lui — xin lỗi FoodTech để bảo vệ 500 gia đình khu bạn', next:'s5_AAB'},
      ]
    },
    s5_AAA:{terminal:true, type:'good', badge:'✅ MẠNG LƯỚI SONG SONG', text:'Xây mạng lưới nông dân địa phương ngoài FoodTech. 2 năm sau: 20% thực phẩm vùng ngoài kiểm soát FoodTech → tiền thân cơ quan phân phối nhà nước. FoodTech mất thế độc quyền.', lesson:'💡 Bài học: Tự chủ kinh tế địa phương là bước đầu tái lập quyền lực công cộng đối với nguồn sống thiết yếu.'},
    s5_AAB:{terminal:true, type:'bad', badge:'❌ KHUẤT PHỤC', text:'FoodTech phục hồi tài khoản. Nhưng họ ghi nhận bạn là "nguy cơ cao". 6 tháng sau điểm bạn bị trừ dần vì "lý do kỹ thuật". Bạn cũng trở thành nạn nhân của hệ thống bạn từng chống.', lesson:'💡 Bài học: Khuất phục trước bất công không bảo vệ bạn — nó chỉ trì hoãn lượt đến của bạn.'},
    s5_AB:{
      speaker:'Luật sư FoodTech', text:'"FoodTech kiện quỹ thực phẩm cộng đồng vi phạm điều khoản 15.2: cạnh tranh không lành mạnh trong thị trường thực phẩm được cấp phép." Tòa án nào sẽ xét xử?',
      choices:[
        {label:'A', text:'Chiến đấu pháp lý — tìm tòa án độc lập', next:'s5_ABA'},
        {label:'B', text:'Mở rộng thành hợp tác xã kiểm soát nguồn cung riêng', next:'s5_ABB'},
      ]
    },
    s5_ABA:{terminal:true, type:'bad', badge:'❌ TÒA TƯ NHÂN', text:'Tòa án duy nhất hoạt động được FoodTech tài trợ. Quỹ thua kiện. Tư pháp tư nhân bảo vệ tư nhân. Quỹ đóng cửa — 10,000 người mất nguồn thức ăn thay thế.', lesson:'💡 Bài học: Tòa án độc lập khỏi lợi ích doanh nghiệp là chức năng không thể thiếu của nhà nước — không thể tư nhân hóa.'},
    s5_ABB:{terminal:true, type:'good', badge:'✅ HỢP TÁC XÃ → NHÀ NƯỚC', text:'Hợp tác xã kiểm soát 15% nguồn cung địa phương. Liên kết liên vùng → "Cơ quan Lương thực Công cộng". Nhà nước tái xuất hiện từ nhu cầu kinh tế thực tiễn — không phải từ lý thuyết.', lesson:'💡 Bài học: Nhà nước có thể được xây dựng từ dưới lên khi người dân cùng nhau kiểm soát nguồn lực thiết yếu.'},
    s5_B:{
      speaker:'Hệ thống', text:'Bạn hack thành công — tăng điểm hàng xóm. Họ mua được gạo. Nhưng FoodTech phát hiện lỗ hổng và vá trong 24 giờ. Bạn tiếp tục?',
      choices:[
        {label:'A', text:'Leo thang — tiếp tục tìm lỗ hổng mới để hack liên tục', next:'s5_BA'},
        {label:'B', text:'Dùng dữ liệu từ hack để vạch trần thuật toán bất công của FoodTech', next:'s5_BB'},
      ]
    },
    s5_BA:{
      speaker:'FoodTech Security', text:'FoodTech thuê đội bảo mật cấp quốc gia. Mỗi lỗ hổng bạn tìm, họ vá trong 6 giờ. Cuộc chiến không cân sức. Trong lúc đó 50,000 người thiếu ăn vẫn đang đợi.',
      choices:[
        {label:'A', text:'Chuyển sang liên minh chính trị — kỹ thuật không đủ', next:'s5_BAA'},
        {label:'B', text:'Tấn công hệ thống của FoodTech để gây gián đoạn lớn', next:'s5_BAB'},
      ]
    },
    s5_BAA:{terminal:true, type:'good', badge:'✅ KỸ THUẬT + CHÍNH TRỊ', text:'Kỹ năng hack + bằng chứng thuật toán → liên minh với phong trào xã hội → scandal quốc tế → FoodTech đàm phán. Thỏa thuận: xóa bỏ hệ thống điểm thực phẩm. Quyền thực phẩm được ghi nhận.', lesson:'💡 Bài học: Kỹ năng kỹ thuật cần kết hợp với vận động chính trị để tạo thay đổi hệ thống.'},
    s5_BAB:{terminal:true, type:'bad', badge:'❌ THUA KỸ THUẬT', text:'FoodTech thuê đội bảo mật cấp quân sự phản công. Cộng đồng thua. Trong lúc đó 50,000 người thiếu ăn. Đơn độc kỹ thuật không thắng tập đoàn tỷ đô — cần liên minh chính trị.', lesson:'💡 Bài học: Kỹ thuật là công cụ, không phải chiến lược. Thay đổi xã hội cần xây dựng quyền lực chính trị.'},
    s5_BB:{
      speaker:'Báo chí', text:'Dữ liệu bạn lấy cho thấy: thuật toán điểm tín dụng tính điểm thấp hơn cho người ở khu nghèo, người dân tộc thiểu số, người già. Bạn làm gì với bằng chứng này?',
      choices:[
        {label:'A', text:'Công bố toàn bộ — scandal công khai, áp lực FoodTech tự cải cách', next:'s5_BBA'},
        {label:'B', text:'Vận động xây dựng luật bảo vệ quyền thực phẩm cơ bản', next:'s5_BBB'},
      ]
    },
    s5_BBA:{terminal:true, type:'warn', badge:'⚠️ ÁP LỰC TẠM THỜI', text:'FoodTech xin lỗi, hứa cải cách. 6 tháng sau hệ thống điểm đổi tên nhưng cơ chế tương tự. Dư luận không có cưỡng chế pháp lý = tạm thời. Tập đoàn chờ dư luận quên rồi quay lại.', lesson:'💡 Bài học: Áp lực dư luận không có pháp lý = áp lực tạm thời. Cần luật với cơ chế thực thi để thay đổi bền vững.'},
    s5_BBB:{terminal:true, type:'good', badge:'✅ LUẬT PHÁP BẢO VỆ', text:'Scandal + vận động → "Luật Quyền Thực phẩm Cơ bản" được thông qua. Lần đầu sau 20 năm, nhà nước tái xuất hiện trong chuỗi thực phẩm. Quyền ăn uống được ghi nhận là quyền con người.', lesson:'💡 Bài học: Thị trường tự do không đảm bảo được quyền sinh tồn — đây là lý do nhà nước cần điều tiết các mặt hàng thiết yếu.'},
  }
},
{
  id:'s6', icon:'🚔', title:'AI CẢNH SÁT DỰ ĐOÁN', period:'QUYỀN LỰC CƯỠNG CHẾ CÓ KIỂM SOÁT',
  desc:'PredictCop bắt người dựa trên dự đoán AI. Em trai bạn bị giam khi hoàn toàn vô tội.',
  year:'Năm 2047',
  intro:[
    {speaker:'Hệ thống', text:'Năm 2047. PredictCop AI thay thế 90% cảnh sát. Bắt giữ người dựa trên DỰ ĐOÁN — trước khi tội phạm xảy ra. Không cần lệnh bắt, không có luật sư, không có kháng cáo.'},
    {speaker:'Hệ thống', text:'Tỉ lệ tội phạm giảm 60% — nhưng 15% người bị bắt hoàn toàn vô tội. Người nghèo bị bắt nhiều gấp 5 lần người giàu cùng "xác suất nguy cơ".'},
    {speaker:'Em trai', text:'"Anh/Chị ơi... PredictCop vừa bắt con. Nó nói con có 87% khả năng phạm tội. Con không làm gì cả. Không ai nghe con..."'},
  ],
  story:{
    text:'🔴 Em trai bạn bị giam vì "87% khả năng phạm tội" — dù hoàn toàn vô tội. Không có cơ chế kháng cáo. Bạn làm gì?',
    speaker:'Lựa chọn',
    choices:[
      {label:'A', text:'Vào thẳng trụ sở PredictCop — đòi thả người trực tiếp', next:'s6_A'},
      {label:'B', text:'Liên hệ ngay mạng lưới luật sư nhân quyền & truyền thông', next:'s6_B'},
    ]
  },
  nodes:{
    s6_A:{
      speaker:'PredictCop AI', text:'"Cảnh báo: cá nhân hiện tại có điểm rủi ro 65% dựa trên hành vi tiếp cận cơ sở PredictCop. Đề nghị rời khỏi khu vực."',
      choices:[
        {label:'A', text:'Rút lui an toàn — tìm con đường khác không đối đầu trực tiếp', next:'s6_AA'},
        {label:'B', text:'Ở lại — tuyên bố quyền thăm nom thân nhân trước camera', next:'s6_AB'},
      ]
    },
    s6_AA:{
      speaker:'Bạn', text:'"Nếu tôi bị gắn nhãn rủi ro chỉ vì đến đây, bao nhiêu người khác cũng vậy?" Bạn bắt đầu nghiên cứu hệ thống.',
      choices:[
        {label:'A', text:'Xây dựng hồ sơ 2,000 người bị bắt oan — tài liệu hóa bất công', next:'s6_AAA'},
        {label:'B', text:'Tìm lỗ hổng kỹ thuật trong thuật toán PredictCop', next:'s6_AAB'},
      ]
    },
    s6_AAA:{terminal:true, type:'good', badge:'✅ NỀN TẢNG PHONG TRÀO', text:'Báo cáo 2,000 trường hợp → tài liệu nền tảng cho phong trào cải cách tư pháp → "Luật Cấm Bắt Giữ Dự đoán" được thông qua. Bằng chứng tập thể mạnh hơn bằng chứng cá nhân.', lesson:'💡 Bài học: Tổ chức xã hội dân sự → vận động lập pháp → luật nhà nước — đây là con đường thay đổi bền vững.'},
    s6_AAB:{terminal:true, type:'good', badge:'✅ PHÁT HIỆN KỸ THUẬT', text:'Phát hiện: PredictCop dùng mã zip (địa chỉ nhà) như proxy cho sắc tộc — phân biệt đối xử được lập trình vào thuật toán. Bằng chứng kỹ thuật + vận động → buộc cơ quan có thẩm quyền can thiệp.', lesson:'💡 Bài học: Bias kỹ thuật cần cơ quan nhà nước có thẩm quyền bắt buộc sửa đổi — không thể chỉ dựa vào lương tâm doanh nghiệp.'},
    s6_AB:{
      speaker:'Camera', text:'Video "Người thân bị từ chối quyền thăm nom bởi AI" viral toàn mạng. 2 triệu lượt chia sẻ trong 24 giờ. Tiếp theo?',
      choices:[
        {label:'A', text:'Tiếp tục biểu tình trực tiếp trước trụ sở PredictCop', next:'s6_ABA'},
        {label:'B', text:'Dùng video kết nối các gia đình nạn nhân khác trên toàn quốc', next:'s6_ABB'},
      ]
    },
    s6_ABA:{terminal:true, type:'warn', badge:'⚠️ VÒNG TRÒN', text:'PredictCop dùng AI dự đoán "người có khả năng biểu tình" và bắt trước. 30 người biểu tình bị giam. Quyền biểu tình cần nhà nước bảo vệ — khi AI bắt người vì "dự đoán biểu tình", tự do hội họp chấm dứt.', lesson:'💡 Bài học: Quyền tự do cơ bản cần nhà nước bảo vệ chủ động — không tự nhiên tồn tại trong thị trường tự do.'},
    s6_ABB:{terminal:true, type:'good', badge:'✅ LIÊN MINH NẠN NHÂN', text:'Mạng lưới 500 gia đình → đề xuất "Luật Cấm Bắt Giữ Dự đoán" → được thông qua sau 2 năm vận động. Tổ chức xã hội dân sự → vận động lập pháp → luật nhà nước.', lesson:'💡 Bài học: Liên minh nạn nhân có bằng chứng cụ thể + tổ chức tốt = con đường hiệu quả nhất tạo thay đổi pháp lý.'},
    s6_B:{
      speaker:'Luật sư', text:'"Tôi sẽ giúp bạn. Nhưng tòa án bây giờ cũng là AI — JusticeAI sẽ xét xử vụ kiện PredictCop. Chúng ta có hai lựa chọn..."',
      choices:[
        {label:'A', text:'Kiện PredictCop — dù tòa án là JusticeAI (AI xét xử AI)', next:'s6_BA'},
        {label:'B', text:'Vận động dư luận — PredictCop đề nghị "xem xét đặc cách" em trai', next:'s6_BB'},
      ]
    },
    s6_BA:{
      speaker:'JusticeAI', text:'"Đơn kiện được thụ lý. Thời gian xử lý: 14 tháng. Trong thời gian đó bị can vẫn bị giam." Nhưng luật sư tìm được một lựa chọn khác...',
      choices:[
        {label:'A', text:'Chấp nhận tiến trình AI — chờ 14 tháng kết quả', next:'s6_BAA'},
        {label:'B', text:'Tìm "Tòa án Nhân quyền Vùng" còn sót lại — tòa án con người', next:'s6_BAB'},
      ]
    },
    s6_BAA:{terminal:true, type:'bad', badge:'❌ VÒNG TÒA KHÉP KÍN', text:'JusticeAI xét xử và... bảo vệ PredictCop vì cùng một công ty mẹ. Không có bước tiếp theo. Em trai ngồi tù vô thời hạn. AI không thể tự kiểm soát AI — cần tòa án con người ở đỉnh hệ thống.', lesson:'💡 Bài học: Nhà nước pháp quyền cần tòa án con người độc lập ở đỉnh hệ thống — không thể ủy thác cho thuật toán.'},
    s6_BAB:{terminal:true, type:'good', badge:'✅ TÒA ÁN CON NGƯỜI THẮNG', text:'Tòa Nhân quyền Vùng xét xử: PredictCop vi hiến vì bắt người mà không có bằng chứng thực tế. Em trai được thả. Phán quyết trở thành tiền lệ cho 200,000 người khác.', lesson:'💡 Bài học: Tòa án con người độc lập là thể chế nhà nước không thể thay thế — nơi cuối cùng bảo vệ quyền cá nhân.'},
    s6_BB:{
      speaker:'PredictCop PR', text:'"Chúng tôi sẵn sàng xem xét đặc cách trường hợp của bạn nếu bạn đồng ý ngừng vận động dư luận và ký thỏa thuận không tiết lộ thông tin."',
      choices:[
        {label:'A', text:'Chấp nhận đặc cách — cứu em trai trước, vận động sau', next:'s6_BBA'},
        {label:'B', text:'Từ chối — yêu cầu thay đổi hệ thống, không phải ngoại lệ cho cá nhân', next:'s6_BBB'},
      ]
    },
    s6_BBA:{terminal:true, type:'bad', badge:'❌ ĐẶC QUYỀN BẤT CÔNG', text:'Em trai được thả. Nhưng bạn ký thỏa thuận im lặng — 200,000 người không có ai vận động cho họ vẫn trong tù. Và PredictCop dùng "sự hợp tác" của bạn như bằng chứng hệ thống hoạt động tốt.', lesson:'💡 Bài học: Đặc cách cá nhân trong hệ thống bất công = bất công có mặt người. Nhà nước tạo ra công lý cho tất cả, không phải đặc ân cho một số.'},
    s6_BBB:{terminal:true, type:'good', badge:'✅ CÔNG LÝ HỆ THỐNG', text:'Từ chối đặc cách → vận động 3 năm (em trai vẫn bị giam) → "Luật Cấm Bắt Giữ Dự đoán" → em trai tự do, cùng 200,000 người khác. Nhà nước tạo ra công lý cho tất cả.', lesson:'💡 Bài học: Giá của nguyên tắc đôi khi rất đau đớn về mặt cá nhân — nhưng nhà nước mạnh giúp không ai phải đối mặt với lựa chọn này.'},
  }
}
];