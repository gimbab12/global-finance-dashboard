const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const replacement = `
  const prevDataRef = useRef<any | null>(null);
  const dict = uiTranslations[lang];

  useEffect(() => {
    // Basic detection for iOS & standalone PWA
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true) {
      setIsStandalone(true);
    }
  }, []);

  const handleInstallApp = () => {
    alert(lang === "ko" ? "사파리 하단의 '공유' 버튼을 누르고 '홈 화면에 추가'를 선택하세요." : "Tap the Share button at the bottom of Safari, then select 'Add to Home Screen'.");
  };

  const handleDismissBanner = () => {
    setShowInstallBanner(false);
    localStorage.setItem("pwa_dismissed", "true");
  };
`;

code = code.replace(/  const \[isStandalone, setIsStandalone\] = useState<boolean>\(false\);/, '  const [isStandalone, setIsStandalone] = useState<boolean>(false);\n' + replacement);

fs.writeFileSync('src/App.tsx', code);
