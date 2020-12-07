<template>
  <div class="wrapper" ref='wrapper'>
    <ul class="content">
      <div @click="btnclick">我是可以点击的</div>
      <li>那是基本上1</li>
      <li>那是基本上2</li>
      <li>那是基本上3</li>
      <li>那是基本上4</li>
      <li>那是基本上5</li>
      <li>那是基本上6</li>
      <li>那是基本上7</li>
      <li>那是基本上8</li>
      <li>那是基本上9</li>
      <li>那是基本上10</li>
      <li>那是基本上11</li>
      <li>那是基本上12</li>
      <li>那是基本上13</li>
      <li>那是基本上14</li>
      <li>那是基本上15</li>
      <li>那是基本上16</li>
      <li>那是基本上17</li>
      <li>那是基本上18</li>
      <li>那是基本上19</li>
      <li>那是基本上20</li>
      <li>那是基本上21</li>
      <li>那是基本上22</li>
      <li>那是基本上23</li>
      <li>那是基本上24</li>
      <li>那是基本上25</li>
      <li>那是基本上26</li>
      <li>那是基本上27</li>
      <li>那是基本上28</li>
      <li>那是基本上29</li>
      <li>那是基本上30</li>
      <li>那是基本上31</li>
      <li>那是基本上32</li>
      <li>那是基本上33</li>
      <li>那是基本上34</li>
      <li>那是基本上35</li>
      <li>那是基本上36</li>
      <li>那是基本上37</li>
      <li>那是基本上38</li>
      <li>那是基本上39</li>
      <li>那是基本上40</li>
      <li>那是基本上41</li>
      <li>那是基本上42</li>
      <li>那是基本上43</li>
      <li>那是基本上44</li>
      <li>那是基本上45</li>
      <li>那是基本上46</li>
      <li>那是基本上47</li>
      <li>那是基本上48</li>
      <li>那是基本上49</li>
      <li>那是基本上50</li>
      <li>那是基本上51</li>
      <li>那是基本上52</li>
      <li>那是基本上53</li>
      <li>那是基本上54</li>
      <li>那是基本上55</li>
      <li>那是基本上56</li>
      <li>那是基本上57</li>
      <li>那是基本上58</li>
      <li>那是基本上59</li>
      <li>那是基本上60</li>
      <li>那是基本上61</li>
      <li>那是基本上62</li>
      <li>那是基本上63</li>
      <li>那是基本上64</li>
      <li>那是基本上65</li>
      <li>那是基本上66</li>
      <li>那是基本上67</li>
      <li>那是基本上68</li>
      <li>那是基本上69</li>
      <li>那是基本上70</li>
      <li>那是基本上71</li>
      <li>那是基本上72</li>
      <li>那是基本上73</li>
      <li>那是基本上74</li>
      <li>那是基本上75</li>
      <li>那是基本上76</li>
      <li>那是基本上77</li>
      <li>那是基本上78</li>
      <li>那是基本上79</li>
      <li>那是基本上80</li>
      <li>那是基本上81</li>
      <li>那是基本上82</li>
      <li>那是基本上83</li>
      <li>那是基本上84</li>
      <li>那是基本上85</li>
      <li>那是基本上86</li>
      <li>那是基本上87</li>
      <li>那是基本上88</li>
      <li>那是基本上89</li>
      <li>那是基本上90</li>
      <li>那是基本上91</li>
      <li>那是基本上92</li>
      <li>那是基本上93</li>
      <li>那是基本上94</li>
      <li>那是基本上95</li>
      <li>那是基本上96</li>
      <li>那是基本上97</li>
      <li>那是基本上98</li>
      <li>那是基本上99</li>
      <li>那是基本上100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data(){
     return {
       scroll: null
     }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true
      })
  },
  methods:{
    btnclick(){
      console.log('点击了')
    }
  }
};
</script>

<style>
.wrapper{
  height: 200px;
  background-color: burlywood;
  overflow: hidden;
}
</style>