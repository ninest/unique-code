type ShareData = {
  title?: string;
  text?: string;
  url?: string;
};

interface Navigator {
  share?: (data?: ShareData) => Promise<void>;
}

export const canShare = () => {
  return 'share' in navigator;
};

export const shareText = async (text: string) => {
  const shareData: ShareData = {
    title: text,
    // url: 'https://unqiquecode.now.sh'
  };

  return await navigator.share(shareData);
};
