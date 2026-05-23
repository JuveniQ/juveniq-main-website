import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fallbackSrc?: string;
  webpSrc?: string;
  placeholderSrc?: string;
  priority?: boolean;
};

const SmartImage = ({
  src,
  fallbackSrc = "/placeholder.svg",
  webpSrc,
  placeholderSrc,
  priority = false,
  alt,
  onLoad,
  style,
  ...rest
}: SmartImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
  }, [src]);

  const resolvedLoading = priority ? "eager" : rest.loading ?? "lazy";
  const resolvedDecoding = rest.decoding ?? "async";
  const resolvedFetchPriority = priority ? "high" : rest.fetchPriority ?? "auto";
  const shouldShowPlaceholder = Boolean(placeholderSrc) && !isLoaded;
  const mergedStyle = shouldShowPlaceholder
    ? {
        ...style,
        backgroundImage: `url(${placeholderSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
      }
    : style;

  const imageElement = (
    <img
      {...rest}
      src={currentSrc}
      alt={alt}
      loading={resolvedLoading}
      decoding={resolvedDecoding}
      fetchPriority={resolvedFetchPriority}
      style={mergedStyle}
      onLoad={(event) => {
        setIsLoaded(true);
        onLoad?.(event);
      }}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );

  if (webpSrc) {
    return (
      <picture>
        <source type="image/webp" srcSet={webpSrc} />
        {imageElement}
      </picture>
    );
  }

  return imageElement;
};

export default SmartImage;
