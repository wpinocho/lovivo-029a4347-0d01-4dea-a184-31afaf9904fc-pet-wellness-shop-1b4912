export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3">
      <img 
        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/029a4347-0d01-4dea-a184-31afaf9904fc/logo.svg.jpg" 
        alt="Pet Wellness"
        className="h-10 w-10 object-contain" 
      />
      <span className="text-lg font-light text-foreground tracking-wide">Pet Wellness</span>
    </a>
  )
}