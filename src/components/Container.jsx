import clsx from "clsx";

const Container = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
