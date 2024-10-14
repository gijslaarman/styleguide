const BEMPattern =
  /^.[a-z]?(?:[a-z0-9-]+)?(?:__(?:[a-z0-9]+-?)+)?(?:--(?:[a-z0-9]+-?)+){0,2}$/

export default {
  rules: {
    'selector-class-pattern': BEMPattern,
  },
}
