interface useRouterProps {
  push: (url: string) => void;
}

export default function useRouter(): useRouterProps {
  const push = (url: string) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return {
    push,
  };
}
