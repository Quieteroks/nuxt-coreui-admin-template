<template>
  <li class="c-sidebar-nav-item">
    <slot>
      <CLink
        :class="linkClasses"
        v-bind="computedLinkProps"
      >
        <CIcon v-if="icon" v-bind="computedIcon"/>
        <i v-if="fontIcon" :class="['c-sidebar-nav-icon', fontIcon]"/>
        {{name}}
        <CBadge
          v-if="badge"
          v-bind="Object.assign({}, badge, { text: null })"
        >
          M: {{badge.text}}
        </CBadge>
      </CLink>
    </slot>
  </li>
</template>

<script>
import CSlidebarNavItem from '@coreui/vue/src/components/template/CSidebarNavItem';

export default {
  extends: CSlidebarNavItem
}
</script>
