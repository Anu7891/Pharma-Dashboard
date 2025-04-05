import Image from "next/image";

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
  return (
    <Image 
      src={src} 
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


