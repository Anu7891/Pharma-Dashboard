import Image from "next/image";
import { usePathname } from 'next/navigation';

const CustomImage = ({ 
  src, 
  alt, 
  width = "100%", 
  height = "100%", 
  priority = false,
  quality = 75,
  className = "",
  style = {},
  objectFit = "cover",
  placeholder = "empty",
  ...props 
}) => {
  const pathname = usePathname();
  
  // Handle undefined or null src
  if (!src) {
    return (
      <div 
        className={`bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-xs text-white">{alt ? alt.charAt(0).toUpperCase() : 'IMG'}</span>
      </div>
    );
  }

  // Add the basePath to the src if it's a relative path and doesn't already have the basePath
  const adjustedSrc = src.startsWith('/') && !src.startsWith('/Pharma-Dashboard') 
    ? `/Pharma-Dashboard${src}` 
    : src;

  return (
    <Image 
      src={adjustedSrc} 
      alt={alt || "Image"} 
      width={typeof width === 'string' ? 100 : width} 
      height={typeof height === 'string' ? 100 : height}
      priority={priority}
      quality={quality}
      className={className}
      style={{ objectFit, ...style }}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default CustomImage;


