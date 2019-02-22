<template>
  <div class="container mb-5">
    <div class="row pb-4">
      <div class="col">
        <h1 class="mt-5">{{ $t('common.futball_cards') }}</h1>
        <img src="../assets/card.svg"  style="max-height: 300px" class="mt-4"/>
        <h3 class="mt-3">{{ $t('common.collect_trade_play') }}</h3>
      </div>
    </div>

    <div class="row pb-4">
      <div class="col text-center">
        <button class="btn btn-primary btn-lg pl-4 pr-4">{{ $t('common.buy') }}</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
  }
}
</script>
