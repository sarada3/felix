function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

export const validateProps = (props) => {
  for (const [key, value] of Object.entries(props)) {
    if (key !== "children") {
      const { size, slidingCount } = value;
      if (size < 1) {
        throw new Error(
          `size must greater than 1.\ninvalid prop => ${key}: { size: ${size} }`
        );
      }
      if (slidingCount < 0) {
        throw new Error(
          `slidingCount must be greater than 0.\ninvalid prop => ${key}: { slidingCount: ${slidingCount} }`
        );
      }
      if (!isInt(slidingCount)) {
        throw new Error(
          `slidingCount must be integer value.\ninvalid prop => ${key}: { slidingCount: ${slidingCount} }`
        );
      }
    }
  }
  const {
    defaultValues,
    sm = defaultValues,
    md = defaultValues,
    lg = defaultValues,
    children,
  } = props;
  const maxSize = Math.max(defaultValues.size, sm.size, md.size, lg.size);
  const childElementCount = children.length;
  if (maxSize > childElementCount) {
    throw new Error(
      `CarouselContainer size can not be greater than the number of actual item.\nyou are attemping to match ${childElementCount} items to carousel which size is ${maxSize}`
    );
  }
};
