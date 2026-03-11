import Button from "@/components/layout/button";

type PageHeaderProps = {
  username: string;
  onLogout: () => void;
};

export default function PageHeader({ username, onLogout }: PageHeaderProps) {
  return (
    <header className="bg-primary w-full px-[2.313rem] py-[1.688rem] flex items-center justify-between">
      <h1 className="font-bold text-[1.375rem] text-white">CodeLeap Network</h1>
      <div className="flex gap-2 items-center">
        <p className="font-bold text-white">
          @ <span>{username}</span>
        </p>
        <Button onClick={onLogout} variant="danger">
          Logout
        </Button>
      </div>
    </header>
  );
}
