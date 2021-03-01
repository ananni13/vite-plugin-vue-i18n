import messages from 'vite-plugin-vue-i18n/messages-generated'

if (typeof window !== 'undefined') {
  window.module = messages
  window.exports = messages
}
