import { useState, useEffect } from 'react';

const ResponsiveLayout = ({ 
  children,
  mobileContent,
  tabletContent,
  desktopContent 
}) => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // 초기 화면 크기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getContent = () => {
    switch (screenSize) {
      case 'mobile':
        return mobileContent || children; // 수정됨
      case 'tablet':
        return tabletContent || children; // 수정됨
      default:
        return desktopContent || children; // 이미 올바름
    }
  };

  return (
    <div className="w-full">
      {getContent()}
    </div>
  );
};

// 사용 예시 컴포넌트
const Example = () => {
  return (
    <ResponsiveLayout
      mobileContent={
        <div className="p-4 bg-blue-100">
          <h1 className="text-xl font-bold">모바일 버전</h1>
          <p className="mt-2">화면 너비: 768px 미만</p>
        </div>
      }
      tabletContent={
        <div className="p-6 bg-green-100">
          <h1 className="text-2xl font-bold">태블릿 버전</h1>
          <p className="mt-2">화면 너비: 768px - 1024px</p>
        </div>
      }
      desktopContent={
        <div className="p-8 bg-purple-100">
          <h1 className="text-3xl font-bold">데스크톱 버전</h1>
          <p className="mt-2">화면 너비: 1024px 이상</p>
        </div>
      }
    />
  );
};

export default Example;
