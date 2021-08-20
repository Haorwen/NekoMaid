import React from 'react'
import * as minecraft from './minecraft/zh_cn.json'

export default {
  minecraft: minecraft as typeof minecraft & Record<string, string>,
  tip: '提示',
  noData: '暂无数据',
  pluginUpdate: '发现插件更新! 推荐立即更新!',
  wrongToken: '密钥错误或插件版本过旧, 最新版本为',
  reconnect: '正在尝试重新连接...',
  actionSuccess: '操作成功!',
  actionFailed: '操作失败!',
  inputValue: '请输入要修改的值',
  invalidValue: '不合法的值!',
  history: '历史记录',
  unknown: '未知',
  more: '更多...',
  refresh: '刷新',
  itemEditor: {
    title: '物品编辑器',
    itemType: '物品类型',
    unknownEnchantment: '未知附魔',
    baseAttribute: '基础属性',
    count: '数量',
    damage: '耐久值',
    displayName: '物品名',
    lore: '物品描述',
    newEnchantment: '添加新附魔',
    newEnchantmentTitle: '请选择需要添加的附魔',
    level: '等级',
    clone: '克隆'
  },
  serverSwitch: {
    title: '连接到服务器',
    noServer: '你还没有连接过任何服务器!',
    wrongHostname: '请输入正确的连接地址!',
    content: '请选择或输入要连接的服务器地址.',
    connect: '连接'
  },
  time: {
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒'
  },
  config: {
    serverConfig: '服务端设置',
    maxPlayers: '最大玩家数',
    spawnRadius: '出生点保护半径',
    whitelist: '白名单',
    theme: '主题设置',
    light: '亮色',
    system: '随系统',
    dark: '暗色'
  },
  console: {
    fatal: '严重',
    error: '错误',
    warn: '警告',
    info: '信息',
    debug: '调试',
    trace: '堆栈',
    expand: '展开',
    fold: '收起',
    sharing: '分享中...',
    confirmShare: '确认要分享这段日志吗',
    command: '命令'
  },
  dashboard: {
    title: '概览',
    onlinePlayers: '在线玩家',
    reason: '理由',
    confirmKick: (name: any) => <>确认要将 {name} 踢出游戏吗?</>,
    players: '玩家数',
    chunks: '区块数',
    entities: '实体数',
    version: '服务端版本',
    updateChecking: '检查更新中...',
    updateFailed: '获取失败, 点击重新获取',
    updated: '当前已为最新版',
    lastHour: '相比于上一小时',
    mspt: '每Tick耗时',
    uptime: '运行时间',
    memory: '内存占用',
    behinds: (version: number) => `当前已落后 ${version} 个版本!`
  },
  files: {
    wrongName: '文件名不合法!',
    exists: '文件已存在!',
    compress: '压缩文件',
    uncompress: '解压文件',
    compressName: '请输入压缩后的文件名',
    unsupportFormat: '文件格式不被支持!',
    notExists: '文件不存在!',
    tooBig: '文件太大了!',
    editor: '编辑器',
    newFile: '新文件',
    createFile: '新建文件',
    createFolder: '新建目录',
    dialogContent: '请输入文件名:',
    invalidName: '文件名不合法!',
    rename: '重命名',
    undo: '撤销',
    redo: '重做',
    save: '保存',
    delete: '删除',
    copy: '复制',
    paste: '粘贴',
    upload: '上传文件',
    download: '下载文件',
    pasting: '粘贴中...',
    uploading: '上传中...',
    downloading: '下载中...',
    compressing: '压缩中...',
    uncompressing: '解压中...',
    notSelected: '请先在左侧选择要编辑的文件',
    filesList: '文件列表',
    uploadTooBig: '文件超过128MB!',
    confirmDelete: (file: any) => <>确认要删除 {file} 吗?</>,
    unrecoverable: '不可恢复!'
  }
}
