const Modified = (WrappedComponent) => {
  return () => (
    <div className="border-4 border-blue-700">
      <WrappedComponent />
    </div>
  );
};

export default Modified;
