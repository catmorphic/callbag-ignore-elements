export default (source) => (type, sink) => {
  if (type !== 0) return;
  source(0, (t, d) => {
    if (t !== 1) return sink(t, d);
  });
};
