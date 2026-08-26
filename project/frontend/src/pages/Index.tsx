import { Link } from 'react-router-dom';

const Index = () => (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">PaperTrade</h1>
      <p className="mt-3 text-muted-foreground">
        Simulated trading with real market data and no real money.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          to="/login"
          className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Login
        </Link>
      </div>
    </div>
);

export default Index;
