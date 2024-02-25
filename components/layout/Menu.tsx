import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Menu = () => {
  return (
    <div dir="rtl">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl">
          <div className="p-4">
            <MenuItem href="/">🧠 ראשי</MenuItem>

            <MenuItem href="/statistics">📊 סטטיסטיקה</MenuItem>
          </div>

          <DrawerFooter>
            <div className="p-4 text-center" dir="ltr">
              <MenuItem
                className="text-sm"
                href="https://ronka.dev"
                target="_blank"
              >
                ronka.dev
              </MenuItem>

              <MenuItem
                className="text-sm"
                href="https://twitter.com/ronkaa"
                target="_blank"
              >
                @ronkaa
              </MenuItem>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

function MenuItem({
  href,
  children,
  className,
  target,
}: {
  target?: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <DrawerClose asChild>
      <Link
        className={cn(
          "block py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700",
          className
        )}
        target={target}
        href={href}
      >
        {children}
      </Link>
    </DrawerClose>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Menu;
