const countWithPrevNextUtil = (currentCount: number, max: number, type: 'next' | 'prev') => {
  if (type === 'next') {
    return currentCount === max ? 0 : currentCount + 1
  } else {
    return currentCount === 0 ? max : currentCount - 1
  }
}

export { countWithPrevNextUtil }
