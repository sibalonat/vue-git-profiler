import { mount } from '@vue/test-utils'
import UserDetail from '@/components/UserDetail.vue'

const $store = {
  state: {
    user: {
      firstName: 'Marin',
      lastName: 'Nikolli',
      username: 'sibalonat',
      email: 'sibalonat@gmail.com',
      isAgreeToTerms: true,
    },
  },
  commit: jest.fn(),
}

const wrapper = mount(UserDetail, {
  global: {
    mocks: {
      $store,
    },
  },
  data() {
    return {
      responseData: {},
    }
  },
})

describe('UserDetail component', () => {
  test('renders user info', () => {
    expect(wrapper.find('.text-name').html()).toContain('Marin Nikolli')
    expect(wrapper.find('.text-email').html()).toContain('sibalonat@gmail.com')
  })
})
