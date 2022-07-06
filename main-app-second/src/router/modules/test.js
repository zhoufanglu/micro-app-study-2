const PageA = () => import('@/views/test/PageA.vue')
const PageB = () => import('@/views/test/PageB.vue')

const test = [
  {
    name: 'PageA',
    path: '/page-A',
    component: PageA
  },
  {
    name: 'PageB',
    path: '/page-B',
    component: PageB
  }
]

export default test
