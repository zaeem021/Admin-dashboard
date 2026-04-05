import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 md:px-6 lg:px-8">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="md:hidden" />

      <div className="hidden md:block" />

      {/* Avatar */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
        A
      </div>
    </header>
  );
};

export default Navbar;
