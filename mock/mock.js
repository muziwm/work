module.exports = {
  rules: [
    {
      pattern: /\/api\/getDatalist.php\?rtype=origin$/,
      respondwith: './datalist.json'
    },
    {
      pattern: /\/api\/getDatalist.php\?rtype=more$/,
      respondwith: './datalistmore.json'
    }
  ]
};
