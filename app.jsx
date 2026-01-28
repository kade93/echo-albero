import React, { useState, useEffect } from 'react';

// --- Icons (Inline SVGs for reliability in preview) ---
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.88 12.88 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>;
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
</svg>;
const IconCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
</svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
</svg>;

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            {/* --- Top Info Bar --- */}
            <div className="bg-[#5d7c47] text-white py-2 px-6 hidden md:block">
                <div className="container mx-auto flex justify-between items-center text-sm font-medium">
                    <p>청주 숲세권 프리미엄 타운하우스 "에코 알베로" 51세대 한정 분양 중</p>
                    <div className="flex gap-4 items-center">
                        <span>현장 문의: 010.4688.2119</span>
                        <span className="bg-white/20 px-2 py-0.5 rounded">특별 혜택 확인</span>
                    </div>
                </div>
            </div>

            {/* --- Header --- */}
            <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src="/eco_albero_logo.jpeg" alt="Eco Albero Logo" className="h-12 w-auto rounded-lg" />
                        <div className="h-6 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>
                        <div className="flex flex-col leading-none hidden sm:flex">
                            <span className="text-[#5d7c47] font-black text-lg tracking-tighter">에코 알베로</span>
                            <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Village</span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-10 text-[15px] font-bold text-slate-600">
                        <a href="#about" className="hover:text-[#5d7c47] transition-colors">단지안내</a>
                        <a href="#location" className="hover:text-[#5d7c47] transition-colors">입지현황</a>
                        <a href="#gallery" className="hover:text-[#5d7c47] transition-colors">건축예시</a>
                        <a href="#contact" className="hover:text-[#5d7c47] transition-colors">상담예약</a>
                        <a href="tel:01046882119"
                            className="bg-[#ff8a00] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#e67c00] transition-all shadow-lg shadow-orange-100">
                            <IconPhone /> 010.4688.2119
                        </a>
                    </div>

                    <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                    alt="Main House" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div
                            className="inline-flex items-center gap-2 bg-[#ff8a00] text-white px-4 py-1.5 rounded mb-8 font-bold text-sm tracking-wide">
                            <IconClock /> 잔여 필지 빠르게 소진 중
                        </div>
                        <h2 className="text-white text-4xl md:text-7xl font-extrabold leading-[1.1] mb-8">
                            하이닉스 퇴근 후 30분,<br />
                            청주 대단지 프리미엄<br />
                            <span className="text-[#a4c639]">관리형 타운하우스</span>
                        </h2>
                        <p className="text-white/80 text-lg md:text-2xl mb-12 font-medium leading-relaxed">
                            아파트형 편리한 인프라와<br />
                            숲세권의 평온함을 동시에 누리는 51세대 명품 단지
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={scrollToContact}
                                className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-lg hover:bg-slate-100 transition-all flex items-center gap-2">
                                지금 분양 문의하기
                            </button>
                            <a href="https://youtu.be/4O8F_lLN4DE?si=gVKuLWUvJq6bCo1M" target="_blank" rel="noopener noreferrer"
                                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all inline-block text-center">
                                모델하우스 영상보기
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Intro Text Section --- */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-1 bg-[#5d7c47]"></div>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                        청주 최대규모! 51 대단지,<br />
                        관리실이 있는 안전한 단지
                    </h3>
                    <p className="text-slate-500 text-lg md:text-xl leading-loose font-medium">
                        진정한 자연 속 힐링 타운하우스를 소개합니다.<br />
                        청주 남일면에 위치한 "에코 알베로" 타운하우스는 편의시설을 단지 내에 갖춘<br />
                        주거환경의 차원을 높인 프리미엄 단지입니다.<br />
                        뛰어난 단지 경관과 함께 삶의 여유와 힐링을 느낄 수 있는 신개념 전원주택단지입니다.
                    </p>
                </div>
            </section>

            {/* --- Location Highlights --- */}
            <section id="location" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <h4 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                                청주 중심이 가깝고<br />
                                직주근접이 완벽
                            </h4>
                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#5d7c47] shrink-0">
                                        <IconCheck />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black mb-2">하이닉스/현대백화점 30분</h5>
                                        <p className="text-slate-500 font-medium">퇴근 후 30분 만에 자연 속으로. 청주의 핵심 인프라를 지척에서 누립니다.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#5d7c47] shrink-0">
                                        <IconCheck />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black mb-2">단지 내 전용 관리사무소</h5>
                                        <p className="text-slate-500 font-medium">보안과 공동시설 관리를 책임지는 전문 인력이 상주하여 편리합니다.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#5d7c47] shrink-0">
                                        <IconCheck />
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black mb-2">4차 우회도로 인접</h5>
                                        <p className="text-slate-500 font-medium">청주 전역 및 오창, 세종 방면으로의 쾌속 교통망을 갖췄습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://naver.me/GBv6kOWz" target="_blank" rel="noopener noreferrer"
                            className="lg:w-1/2 bg-white p-4 rounded-[40px] shadow-2xl relative group overflow-hidden block">
                            <img src="/map.png"
                                alt="에코알베로 지도 위치" className="w-full rounded-[30px] group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-slate-900/10 group-hover:bg-slate-900/20 transition-all">
                                <div className="bg-[#5d7c47] text-white p-4 rounded-full mb-4 shadow-xl">
                                    <IconMapPin />
                                </div>
                                <h6 className="text-2xl font-black mb-2 text-white drop-shadow-md">에코 알베로 현장</h6>
                                <p className="text-slate-900 font-bold bg-white/90 px-4 py-1 rounded-full text-sm">청주시 남일면 고은리 일원</p>
                                <p className="mt-4 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">클릭하여 네이버 지도로 보기</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Gallery --- */}
            <section id="gallery" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h4 className="text-4xl md:text-5xl font-black">
                            공간의 깊이가 다른<br />
                            <span className="text-[#5d7c47]">에코 알베로</span> 하우스
                        </h4>
                        <p className="text-slate-400 font-bold text-lg max-w-sm">
                            사용자의 라이프스타일에 맞춘 자유로운 설계와 분양사에서 제공하는 감각적인 건축 예시를 확인해보세요.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-4 group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
                                <img src="/design1.png"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Modern Minimalist" />
                            </div>
                            <h6 className="text-xl font-bold">모던 미니멀리즘 디자인</h6>
                        </div>
                        <div className="space-y-4 group cursor-pointer lg:translate-y-12">
                            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
                                <img src="/design2.png"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Luxury Villa" />
                            </div>
                            <h6 className="text-xl font-bold">숲세권 럭셔리 빌라 타입</h6>
                        </div>
                        <div className="space-y-4 group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
                                <img src="/design3.png"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt="Cozy Family House" />
                            </div>
                            <h6 className="text-xl font-bold">가족 중심형 프리미엄 하우스</h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Contact Form --- */}
            <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5d7c47] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2">
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white rounded-[50px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                        <div className="lg:w-[45%] bg-[#5d7c47] p-12 md:p-20 text-white space-y-8">
                            <h4 className="text-4xl md:text-6xl font-black leading-tight">
                                지금 바로<br />
                                문의하세요
                            </h4>
                            <p className="text-white/70 text-lg font-medium">
                                원하시는 필지 위치와 건축 상담을<br />
                                전문 분양상담사가 상세히 안내해 드립니다.
                            </p>
                            <div className="pt-8 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <IconPhone />
                                    </div>
                                    <span className="text-2xl font-bold">010.4688.2119</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <IconMapPin />
                                    </div>
                                    <span className="text-xl font-bold">홍보관: 청주시 남일면 고은리 일원</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[55%] p-12 md:p-20 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Name</label>
                                    <input type="text" placeholder="성함"
                                        className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-[#5d7c47] transition-colors font-bold text-lg" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone</label>
                                    <input type="tel" placeholder="연락처"
                                        className="w-full border-b-2 border-slate-100 py-4 outline-none focus:border-[#5d7c47] transition-colors font-bold text-lg" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Interest</label>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {['방문예약', '분양가문의', '필지문의', '기타'].map((item) => (
                                        <button key={item}
                                            className="px-6 py-3 rounded-full border-2 border-slate-100 font-bold text-slate-500 hover:border-[#5d7c47] hover:text-[#5d7c47] transition-all">
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-8">
                                <button
                                    className="w-full bg-[#5d7c47] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#4a6339] transition-all shadow-xl shadow-green-100">
                                    신청하기
                                </button>
                                <p className="text-center mt-6 text-slate-400 text-sm font-medium">개인정보는 분양 상담을 위해서만 활용됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-white py-20 border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex items-center gap-3">
                            <img src="/eco_albero_logo.jpeg" alt="Eco Albero Logo" className="h-10 w-auto rounded-md grayscale opacity-80" />
                            <div className="text-[#5d7c47] font-black text-2xl tracking-tighter italic">ECO ALBERO</div>
                        </div>
                        <div className="flex gap-12 text-slate-400 font-bold text-sm">
                            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">개인정보처리방침</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">오시는길</a>
                        </div>
                    </div>
                    <div className="mt-12 pt-12 border-t border-slate-50 text-center md:text-left">
                        <p className="text-slate-400 text-sm leading-loose font-medium">
                            에코 알베로 | 분양대행: 주식회사 와운 | 주소: 충청북도 청주시 상당구 수암로54번길 8 3동 3층 <br />
                            사업자등록번호: [번호확인 필요] | 대표자: [성함] | 분양문의: 010.4688.2119 <br />
                            본 사이트의 조감도 및 CG는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.
                        </p>
                        <p className="mt-6 text-slate-300 text-xs uppercase tracking-widest">© 2026 ECO ALBERO. ALL RIGHTS
                            RESERVED.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;