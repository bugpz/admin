/*
 * @Description:message.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-02-02 09:55
 * @LastEditTime: 2021-02-02 09:55
 * @LastEditors: BugP
*/
import Default from '../pages/Default/Default'
import messageSetting from '../pages/message/messageSetting/messageSetting'
import messageNote from '../pages/message/messageNote/messageNote'
import messageNoteLog from '../pages/message/messageNoteLog/messageNoteLog'
import messageMail from '../pages/message/messageMail/messageMail'
import messageMailLog from '../pages/message/messageMailLog/messageMailLog'
import messagePushText from '../pages/message/messagePushText/messagePushText'
import messagePushTextLog from '../pages/message/messagePushTextLog/messagePushTextLog'
import messagePushAudio from '../pages/message/messagePushAudio/messagePushAudio'
import messagePushAudioLog from '../pages/message/messagePushAudioLog/messagePushAudioLog'

const message = {
  path: '/message',
  meta: {title: '消息管理', icon: '#i-msg', layer: 2},
  redirect: '/message/index',
  component: Default,
  children: [
    {
      path: 'messageSetting',
      meta: {title: '消息设置'},
      component: messageSetting
    },
    {
      path: 'messageNote',
      meta: {title: '短信消息'},
      component: messageNote
    },
    {
      path: 'messageNoteLog',
      meta: {title: '短信记录'},
      component: messageNoteLog
    },
    {
      path: 'messageMail',
      meta: {title: '站内信消息'},
      component: messageMail
    },
    {
      path: 'messageMailLog',
      meta: {title: '站内信消息记录'},
      component: messageMailLog
    },
    {
      path: 'messagePushText',
      meta: {title: '文字Push'},
      component: messagePushText
    },
    {
      path: 'messagePushTextLog',
      meta: {title: '文字Push记录'},
      component: messagePushTextLog
    },
    {
      path: 'messagePushAudio',
      meta: {title: '语音PUSH'},
      component: messagePushAudio
    },
    {
      path: 'messagePushAudioLog',
      meta: {title: '语音PUSH记录'},
      component: messagePushAudioLog
    }
  ]
}
export default message
