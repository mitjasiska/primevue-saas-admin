<script setup lang="ts">
import AppMenuItem from '@/components/menu/AppMenuItem.vue';
import { menuItems } from '@/components/menu/menu';
</script>

<template>
  <div class="layout-sidebar overflow-y-auto">
    <nav>
      <ol class="layout-menu">
        <AppMenuItem :menu-items="menuItems"></AppMenuItem>
      </ol>
    </nav>
  </div>
</template>

<style lang="postcss">
.layout-menu {
  height: calc(100vh - var(--header-height));
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 0.25rem;

    > button,
    > a {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 0.5rem 1px;
      color: var(--text-color);
      font-weight: 600;
      transition: outline-color 0.2s;
      outline-color: transparent;
      position: relative;
      background: transparent;
      font-size: 1rem;
      border: 0 none;
      margin: 0;
      text-align: left;
      cursor: pointer;
      user-select: none;
      --p-focus-ring-offset: -1px;
      @include focus-visible();

      .menu-icon {
        width: 2rem;
        height: 2rem;
        border-radius: 6px;
        margin-inline-end: 0.5rem;
        border: 1px solid var(--border-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        position: relative;
        background-color: transparent;

        i {
          color: var(--text-color);
          transition: all 0.2s;
        }
      }

      .menu-toggle-icon {
        color: var(--text-secondary-color);
        margin-inline-start: auto;
      }

      &:hover {
        .menu-icon {
          background-color: var(--card-background);

          i {
            color: var(--primary-text-color);
          }
        }

        .menu-toggle-icon {
          color: var(--text-color);
        }
      }

      &.router-link-active {
        color: var(--primary-text-color);

        > .menu-icon {
          i {
            color: var(--primary-text-color);
          }
        }
      }
    }

    > div {
      overflow: hidden;

      ol {
        margin: 0;
        margin-inline-start: 1rem;
        padding: 0.25rem 0;
        list-style: none;

        li {
          a {
            border-inline-start: 1px solid var(--border-color);
            transition: all 0.2s;
            font-weight: 450;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            padding-inline-start: 1rem;
            color: var(--text-secondary-color);
            transition:
              outline-color 0.2s,
              border-color 0.2s;
            outline-color: transparent;
            position: relative;
            --p-focus-ring-offset: -1px;
            @include focus-visible();

            &:hover {
              border-left-color: var(--hover-border-color);
            }

            &.router-link-active {
              color: var(--primary-text-color);
              border-inline-start-color: var(--primary-text-color);
            }
          }

          ol {
            margin: 0;
            padding: 0;
          }

          &:has(.menu-child-category) {
            margin-top: 1rem;
          }

          &:has(.menu-child-category):first-child {
            margin-top: 0rem;
          }
        }
      }
    }
  }

  .p-tag {
    position: absolute;
    inset-inline-end: 0;
    top: 50%;
    transform: translateY(-50%);

    .p-tag-label {
      line-height: 1;
      font-size: 0.75rem;
    }
  }

  .menu-child-category {
    display: flex;
    padding: 0.5rem;
    padding-inline-start: 0;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--text-secondary-color);
    margin-bottom: 0.25rem;
  }
}
</style>
