import JudicialExperience from '@/views/Apply/QualificationsAndExperience/JudicialExperience';
import { shallowMount } from '@vue/test-utils';
import RadioGroup from '@/components/Form/RadioGroup';
import RadioItem from '@/components/Form/RadioItem';
// import TextareaInput from '@/components/Form/TextareaInput';

const application = {};

const mockStore = {
  dispatch: jest.fn(),
  state: {
    application: {
      record: {},
    },
  },
  getters: {
    'application/data': () => application,
  },
};

const createTestSubject = () => {
  return shallowMount(JudicialExperience, {
    mocks: {
      $store: mockStore,
    },
  });
};

xdescribe('views/QualificationsAndExperience/JudicialExperience', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createTestSubject();
  });

  xdescribe('template', () => {
    it('renders', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('contains a <h1>', () => {
      expect(wrapper.contains('h1')).toBe(true);
    });

    it('contains a <form>', () => {
      expect(wrapper.find('form').exists()).toBe(true);
    });

    it('the <form> contains a "Save and continue" submit button', () => {
      const button = wrapper.find('form button');
      expect(button.element.type).toBe('submit');
      expect(button.text()).toBe('Save and continue');
    });

    it('renders the RadioGroup components', () => {
      expect(wrapper.find(RadioGroup).exists()).toBe(true);
    });

    it('renders the RadioItem components', () => {
      expect(wrapper.find(RadioItem).exists()).toBe(true);
    });

    // it('renders the TextareaInput components', () => {
    //   wrapper.setData({ hasBeenJudge: true, thirtyDaysSitting: false });
    //   expect(wrapper.find(TextareaInput).exists()).toBe(true);
    // });
  });
});
