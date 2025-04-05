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
  // Add the basePath to the src if it's a relative path and doesn't already have the basePath
  const adjustedSrc = src.startsWith('/') && !src.startsWith('/Pharma-Dashboard') 
    ? `/Pharma-Dashboard${src}` 
    : src;

  return (
    <Image 
      src={adjustedSrc} 
      alt={alt} 
      width={width} 
      height={height}
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


