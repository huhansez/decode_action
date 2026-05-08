//Fri May 08 2026 13:53:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const NC = require("axios");
const ND = require("https");
const Nx = require("fs");
const NL = require("path");
const NO = require("crypto");
const Nw = NL.join(__dirname, "user_agent_bindings.json");
const Nb = {
  id: "54013881",
  name: "离婚后，前夫哭着求复婚",
  totalEpisodes: 162
};
const NT = {
  id: "54014684",
  name: "重生改嫁后，未婚夫悔疯了",
  totalEpisodes: 85
};
const NW = {
  id: "54015813",
  name: "暖暖如期",
  totalEpisodes: 60
};
const Nh = {
  id: "54015784",
  name: "断供后，吸血鬼哭求我原谅",
  totalEpisodes: 60
};
const Nf = {
  id: "54015922",
  name: "长生千年，我为曾孙女撑腰",
  totalEpisodes: 67
};
const Nv = {
  id: "54016197",
  name: "不装了，其实我是你婆婆",
  totalEpisodes: 60
};
const NQ = {
  id: "54014781",
  name: "开局为家族开枝散叶",
  totalEpisodes: 67
};
const Ni = {
  id: "54015933",
  name: "R卡被抛弃，我成SSR你哭什么",
  totalEpisodes: 65
};
const NS = {
  id: "54015833",
  name: "假千金她玩脱了",
  totalEpisodes: 63
};
const Nd = {
  id: "54012451",
  name: "诱他俯首",
  totalEpisodes: 63
};
const NE = {
  id: "54015185",
  name: "嫁错郎泪两行",
  totalEpisodes: 43
};
const NB = {
  id: "54013973",
  name: "穿越时空的错爱",
  totalEpisodes: 71
};
const Nu = {
  id: "54015097",
  name: "当季风抚过池水",
  totalEpisodes: 62
};
const NV = {
  id: "54015945",
  name: "你们是诡异，而我是穷鬼",
  totalEpisodes: 60
};
const Ny = {
  id: "54016211",
  name: "刚毕业有几万亿资产很正常第2部",
  totalEpisodes: 52
};
const NI = {
  apiUrl: "https://theater.bjyikan.cn/reading/duration/security_report",
  loopCount: 1000,
  reportInterval: 3000,
  maxFailedAttempts: 3,
  debugMode: false,
  reportsPerEpisode: 3,
  videoSeriesList: [Nb, NT, NW, Nh, Nf, Nv, NQ, Ni, NS, Nd, NE, NB, Nu, NV, Ny]
};
const Y1 = "-----BEGIN RSA PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDOI6oQWnY2P0q1KA3Vs4JbdOzpuuugLNFKD4E/ts7+tjZZWomFXZpbn/GNnZTCCnECf7y+ljZRFyi4Uqw2eQISChrd4p4cY/ngD3Ph6Hea9E10YS5i7V4T1PI1VTpmMgKq1+FGXEnvka2fbPAOSpZNk/q9O8IQHs+0uK+S4bkJHTz39m7ArPciZQXTDOxLeeD+Wsb6vqda0wC6+kgBF2dyXZhmL1zUoJEfQ4KkVb6eLZGauseDwjshz2T9//yWAvrq6Y9BF1VbQOKEG4BCPNfawQosod1tMhSSQZtu9LZI6CfI4HhpeTxXT6IbqrjajrJ9osODiU/tSx9qVzdagUiLAgMBAAECggEBAMwWqUg5l/ILZbbHqjLa4AQWVnzuEFzsImW1xhxDrNqnolWC+sasrqdqSmgQDPi0B8EWoNL8u1g7mpgrWc8wrSkZEhJ+TFYFcZ4xDmUqmEg0+f5wPNG6+rqdyROehwwpFVT6GVJlCtqCm6hM3br4g6jZCpWR9YeqSbA+ba35hw4KOA6juNPFELD5IIq3L6tYiYMujWFwiVV08AR8++T3ZETBYRHmCxgREXYws6tdIojsPA00CnW0ta1UcrUKDxK8YZnY1h/GQ+1y5pKGkVvwUodOM3b1SBIz6kA6CvOpTGhKhsnhH1x6SvbGC/HhotElsUObXucvhul1yyJbljMPlFECgYEA/9mN6sYFbFn0ggwEBd8YXeFKMFpgVsh2PMVXNTW4pX2EyJV77FcIgFnb9Qp4E//bJZCf3RvGY82zf3BOdi/m1lsN64OXxVX5YZjE8RW94w3adQxiMJTSR+ZJMzVeSbUhZlN3rMZkrYEmr/Hg2Ap0ufUH7IqUtMwmy59Xwl/5w7MCgYEAzkKj33TJOfrsEncKwMAMEPgUePDjJ5sx9J70pNfRH4y0VTmuSWUQhpGz6eyTMFNG0IxBy5zuUIxTu4FHL99H0kxvwGnNVhhC8k9ChFJkpW1uEufxv6a2hsMMzep7AcmfwTNY4/NO68+GDzrGfoJVtAUTu+SJQAd9Y64/oJrSW8kCgYBgjB1k2gMT50JAjP47pPuR+cFAS+qM9SrBNgr5tmMOeDZSZy6TeihoHwDFEIVNrsBpBZF+I8wSv34b+ipxqRPoEgZHuKneOtpXvQmcnILCmui0QM8Q3CgaH8nBvELvd525+odvuJInc1RBEvqxLAjuX4v09Dq3m06Min3YiNU8xwKBgQCtwkIfO1lR+OrrW1G5s4/2s6c7g2M5uGpLM6XRQOaxd21r5p3Gwtc7Jn+0b1JIAb/EbIP5Lgkt3imj6nK4B5ePuEjkhb0v7FxpmQ/mPSsAmcGDN9bWp3FY8fRVfFWH2f01WzZlQlGYIklDhzY02UOt1iEbxplBUY32bZK4j/Tq0QKBgCZjm5nSTYbWuz+v4TiIocTs0KP3nVRKYP7hGh7/U6gWCUPPgXhCtsxrzaWuih+tT4LUoHM3g/kE+M2Xfn2+G68Xm9iTwmzzzrMP8wyIY3IYJ7xgR5Nl1rMFjPqCLVXKtJgFmMX3RA07vCkRKX88qdLE0BrSXIgIr2vdpdsgGcfr\n-----END RSA PRIVATE KEY-----";
function Y2() {
  const F = {
    uBUXD: function (H, c) {
      return H > c;
    },
    FLKKt: function (H, c) {
      return H !== c;
    },
    VCARm: "gwnQG",
    KHMJg: "lkIfh",
    fwVDv: function (H, c) {
      return H === c;
    },
    KpdKk: "SMvZg",
    RNhlx: "BeurA",
    jxRLq: "lNeJe",
    lUKyB: function (H, c) {
      return H === c;
    },
    duZNy: "xYYqe",
    lRYka: "(((.+)+)+)+$",
    yJYWb: function (H, c) {
      return H === c;
    },
    qWeOu: function (H, c) {
      return H / c;
    },
    xcgwW: "KqqID",
    gCtHo: "ezWQh",
    HxPNP: "http",
    WPZXZ: "❌ 保存User-Agent绑定信息失败:",
    qzdXv: "1|3|4|2|0",
    ChTjh: "\n🎉 时长上报脚本执行完成（自动停止）",
    tVfYt: "🎉 所有视频合集已播放完成，开始新一轮循环播放！",
    IIgnX: "❌ 加载User-Agent绑定信息失败，将重新生成:",
    UDGgy: "4|1|0|2|3",
    DsOCl: "业务逻辑错误",
    WlADP: "mNfLE",
    YnZyG: function (H, c) {
      return H !== c;
    },
    HorKC: "uxJZn",
    Tsyvf: "hYBfj",
    uRFAR: function (H, c) {
      return H(c);
    },
    HSPHz: "NJdBM",
    efZdS: "edoql",
    zPLfE: function (H, c) {
      return H + c;
    },
    lfPRa: "bUJlw",
    AocwR: "Bmfce",
    axFmv: function (H, c, p) {
      return H(c, p);
    },
    CIxTv: "475678",
    FlLvx: "30560",
    LLJwK: "zy8b0c8f",
    umxiI: "103056009",
    AcJNO: "com.zhangyue.app.shortplay.yikanbj",
    YeRjS: "navigationbar_is_min",
    Wfxsd: "501609",
    RGcqu: function (H, c) {
      return H === c;
    },
    OcDQB: "ffswF",
    BSJny: "qFNhl",
    ETwkh: "ckeYR",
    fpIYQ: function (H) {
      return H();
    },
    HKTlP: function (H, c) {
      return H === c;
    },
    QpuJw: "vLVQb",
    jwUAx: "❌ 未找到SKSC环境变量，请检查配置",
    BNvBK: function (H, c) {
      return H === c;
    },
    WPuYZ: "QdZIr",
    YOuzU: "❌ 未找到有效的账号URL，请检查SKSC环境变量格式",
    zcjoY: "DVkYS",
    aKdBb: "❌ 未找到任何有效账号配置，请检查SKSC环境变量"
  };
  const J = process.env.SKSC || "";
  if (!J) {
    console.log("❌ 未找到SKSC环境变量，请检查配置");
    return [];
  }
  const t = J.split(/[\r\n]+/).filter(c => {
    {
      const M = c.trim();
      return M.length > 0 && (M.startsWith("http") || M.includes("="));
    }
  });
  if (t.length === 0) {
    {
      console.log("❌ 未找到有效的账号URL，请检查SKSC环境变量格式");
      return [];
    }
  }
  console.log("📋 检测到 " + t.length + " 个账号URL");
  const U = [];
  const j = new Map();
  t.forEach((p, M) => {
    const G = {
      sATFE: "❌ 加载User-Agent绑定信息失败，将重新生成:",
      RZJUe: "4|1|0|2|3",
      MSAiX: "业务逻辑错误"
    };
    {
      try {
        {
          const A = Y3(p);
          if (!A.p1 || !A.usr) {
            {
              console.log("⚠️ 跳过第" + (M + 1) + "个账号：缺少必要参数(p1或usr)");
              return;
            }
          }
          const a = A.p1 + "_" + A.usr;
          if (j.has(a)) {
            {
              console.log("⚠️ 跳过重复账号：p1=" + A.p1 + ", usr=" + A.usr);
              return;
            }
          }
          j.set(a, true);
          const K = YF(A.p1, A.usr);
          const P = {
            id: "account_" + (U.length + 1),
            name: "速看短剧账号" + (U.length + 1),
            p1: A.p1,
            usr: A.usr,
            zyeid: A.zyeid,
            zysid: A.zysid,
            p35: A.p35,
            taskConfig: {
              userAgent: K,
              p16: A.p16,
              p22: A.p22,
              p31: A.p31,
              p9: A.p9,
              p7: A.p7,
              p2: A.p2 || "475678",
              p21: A.p21 || "5",
              p24: A.p24 || "0",
              p25: A.p25 || "30560",
              p29: A.p29 || "zy8b0c8f",
              p3: A.p3 || "103056009",
              p33: A.p33 || "com.zhangyue.app.shortplay.yikanbj",
              p34: A.p34 || "navigationbar_is_min",
              p4: A.p4 || "501609",
              p5: A.p5 || "16",
              pc: A.pc || "10"
            }
          };
          U.push(P);
          NI.debugMode && console.log("✅ 成功解析第" + (M + 1) + "个账号：" + P.name + " (p1=" + A.p1 + ", usr=" + A.usr + ")");
        }
      } catch (r) {
        console.log("❌ 解析第" + (M + 1) + "个账号URL失败：" + r.message);
        console.log("   问题URL：" + p.substring(0, 100) + "...");
      }
    }
  });
  console.log("✅ 成功加载 " + U.length + " 个有效账号（去重后）");
  if (U.length === 0) {
    {
      console.log("❌ 未找到任何有效账号配置，请检查SKSC环境变量");
    }
  }
  return U;
}
function Y3(Y) {
  const g = {
    mwMah: "utf8",
    Comoe: function (U, j) {
      return U === j;
    },
    LUAeG: "BQLFZ",
    sVuJd: "BrtVG",
    bmZTp: "DVPgL",
    pvCXe: "PizWt"
  };
  let z = Y;
  if (Y.includes("?")) {
    {
      const j = Y.split("?");
      z = j[1] || j[0];
    }
  }
  const J = new URLSearchParams(z);
  const t = {};
  for (const [H, c] of J) {
    {
      t[H] = c;
    }
  }
  return t;
}
const Y4 = Y2();
const Y5 = NL.join(__dirname, "video_progress.json");
class Y6 {
  constructor() {
    this.progressData = this.loadProgress();
  }
  loadProgress() {
    const Y = {
      DSzWB: "/api",
      nViZP: "🔐 签名内容结构:",
      KWxhB: "参数&&路径&时间戳&sigSec",
      MGPGb: "   签名内容长度:",
      OeKpY: "   签名内容前100字符:",
      puxpx: "pem",
      nctiq: "RSA-SHA256",
      kqVgs: "utf8",
      aDcBh: "base64",
      wJUQL: "❌ 签名生成失败:",
      UQvrc: function (g, z) {
        return g + z;
      },
      HZjIQ: function (g, z) {
        return g > z;
      },
      qoSVj: function (g, z) {
        return g(z);
      },
      GKLxO: function (g, z, J) {
        return g(z, J);
      },
      bsBdl: function (g, z) {
        return g + z;
      },
      JXjYz: "475678",
      LCYgj: "30560",
      QvhEx: "zy8b0c8f",
      WBbHH: "103056009",
      mUpiw: "com.zhangyue.app.shortplay.yikanbj",
      RuysU: "navigationbar_is_min",
      ySLJj: "501609",
      phdcF: function (g, z) {
        return g + z;
      },
      jHMYo: function (g, z) {
        return g !== z;
      },
      XFQrQ: "BFlnw",
      oBCZu: "ezzAR",
      BzJdo: "bWHvX",
      IHfwX: function (g, z) {
        return g === z;
      },
      TBcLe: "UKCWX",
      fuXLA: "⚠️ 读取视频进度文件失败，将创建新文件:"
    };
    try {
      {
        if (Nx.existsSync(Y5)) {
          {
            const z = Nx.readFileSync(Y5, "utf8");
            return JSON.parse(z);
          }
        }
      }
    } catch (t) {
      {
        console.log("⚠️ 读取视频进度文件失败，将创建新文件:", t.message);
      }
    }
    const F = {
      currentSeriesIndex: 0,
      lastEpisode: 0,
      currentEpisodeReportCount: 0,
      totalExecutions: 0,
      lastExecutionTime: null,
      seriesHistory: []
    };
    return F;
  }
  saveProgress() {
    try {
      {
        this.progressData.lastExecutionTime = new Date().toISOString();
        Nx.writeFileSync(Y5, JSON.stringify(this.progressData, null, 2));
      }
    } catch (z) {
      console.log("⚠️ 保存视频进度文件失败:", z.message);
    }
  }
  getCurrentSeries() {
    return NI.videoSeriesList[this.progressData.currentSeriesIndex];
  }
  getCurrentEpisode() {
    const g = this.getCurrentSeries();
    if (this.progressData.currentEpisodeReportCount >= NI.reportsPerEpisode) {
      {
        this.progressData.currentEpisodeReportCount = 0;
        let J = this.progressData.lastEpisode + 1;
        J > g.totalEpisodes && (this.switchToNextSeries(), J = 1);
        this.progressData.lastEpisode = J;
      }
    }
    this.progressData.currentEpisodeReportCount++;
    return this.progressData.lastEpisode;
  }
  switchToNextSeries() {
    const g = this.getCurrentSeries();
    this.progressData.seriesHistory.push({
      seriesId: g.id,
      seriesName: g.name,
      completedAt: new Date().toISOString(),
      lastEpisode: this.progressData.lastEpisode
    });
    this.progressData.currentSeriesIndex = (this.progressData.currentSeriesIndex + 1) % NI.videoSeriesList.length;
    this.progressData.lastEpisode = 0;
    this.progressData.currentEpisodeReportCount = 0;
    const z = this.getCurrentSeries();
    console.log("🔄 切换到新合集: " + z.name + " (" + z.id + ")");
    if (this.progressData.currentSeriesIndex === 0) {
      {
        console.log("🎉 所有视频合集已播放完成，开始新一轮循环播放！");
      }
    }
  }
  isCurrentSeriesCompleted() {
    const g = this.getCurrentSeries();
    return this.progressData.lastEpisode >= g.totalEpisodes && this.progressData.currentEpisodeReportCount >= NI.reportsPerEpisode;
  }
  areAllSeriesCompleted() {
    return this.progressData.currentSeriesIndex === 0 && this.isCurrentSeriesCompleted();
  }
  getLoopCount() {
    if (this.progressData.seriesHistory.length === 0) {
      return 0;
    }
    const g = this.progressData.seriesHistory.length;
    const z = NI.videoSeriesList.length;
    return Math.floor(g / z);
  }
  updateProgress() {
    this.progressData.totalExecutions += 1;
    this.saveProgress();
  }
  getProgressInfo() {
    const Y = this.getCurrentSeries();
    const F = this.getLoopCount();
    const g = this.isCurrentSeriesCompleted();
    const z = this.areAllSeriesCompleted();
    const J = {
      currentSeries: Y,
      currentEpisode: this.progressData.lastEpisode,
      currentEpisodeReportCount: this.progressData.currentEpisodeReportCount,
      reportsPerEpisode: NI.reportsPerEpisode,
      totalEpisodes: Y.totalEpisodes,
      lastEpisode: this.progressData.lastEpisode,
      totalExecutions: this.progressData.totalExecutions,
      lastExecutionTime: this.progressData.lastExecutionTime,
      seriesHistory: this.progressData.seriesHistory,
      totalSeries: NI.videoSeriesList.length,
      currentSeriesIndex: this.progressData.currentSeriesIndex,
      loopCount: F,
      isCurrentSeriesCompleted: g,
      areAllSeriesCompleted: z
    };
    return J;
  }
}
const Y7 = new Y6();
function Y8() {
  return Date.now().toString();
}
function Y9() {
  return new Date().toISOString().split("T")[0];
}
function YN() {
  const g = ["10", "11", "12", "13", "14", "9", "8.1.0", "8.0.0", "7.1.2", "7.0"];
  const z = ["SM-G9880", "SM-G9750", "SM-G9730", "SM-G9700", "SM-N9860", "SM-N9760", "SM-N9750", "SM-N9700", "Mi 10", "Mi 11", "Mi 12", "Redmi K40", "Redmi K50", "P40 Pro", "Mate 40", "P50", "Mate 50", "OnePlus 9", "OnePlus 10", "OnePlus 11", "VIVO X70", "VIVO X80", "OPPO Find X5", "OPPO Reno8"];
  const J = ["SP1A", "QP1A", "RP1A", "TP1A", "UP1A"];
  const t = g[Math.floor(Math.random() * g.length)];
  const U = z[Math.floor(Math.random() * z.length)];
  const j = J[Math.floor(Math.random() * J.length)];
  const H = Math.floor(Math.random() * 900000000) + 100000000;
  return "Dalvik/2.1.0 (Linux; U; Android " + t + "; " + U + " Build/" + j + "." + H + ")";
}
function YY() {
  try {
    {
      if (Nx.existsSync(Nw)) {
        {
          const Y = Nx.readFileSync(Nw, "utf8");
          return JSON.parse(Y);
        }
      }
    }
  } catch (z) {
    console.log("❌ 加载User-Agent绑定信息失败，将重新生成:", z.message);
  }
  return {};
}
function Ys(Y) {
  const g = {
    EdGob: function (z, J) {
      return z + J;
    },
    KQOHa: "❌ 未找到有效账号配置，请检查SKSC环境变量",
    KkaTj: function (z, J) {
      return z === J;
    },
    QMGwH: "tNyvB",
    KzdWb: "glROp",
    eBETP: "utf8",
    wraZF: "✅ User-Agent绑定信息已保存",
    YlJgG: function (z, J) {
      return z !== J;
    },
    OTUCV: "jXWpD",
    wxIDl: "ZIccW",
    NZOnT: "❌ 保存User-Agent绑定信息失败:"
  };
  try {
    {
      Nx.writeFileSync(Nw, JSON.stringify(Y, null, 2), "utf8");
      console.log("✅ User-Agent绑定信息已保存");
    }
  } catch (J) {
    {
      console.log("❌ 保存User-Agent绑定信息失败:", J.message);
    }
  }
}
function Ye(N, Y) {
  return "account_" + N + "_" + Y;
}
function YF(N, Y) {
  const g = Ye(N, Y);
  const z = YY();
  if (z[g]) {
    {
      console.log("[" + g + "] 使用已绑定的User-Agent");
      return z[g];
    }
  }
  const J = YN();
  z[g] = J;
  Ys(z);
  console.log("[" + g + "] 生成并绑定新的User-Agent: " + J);
  return J;
}
function Yg(F, g) {
  const J = {
    gONRA: "/api",
    CTPfX: function (j, H) {
      return j !== H;
    },
    nJihV: "fZDQh",
    BoyYV: "UavWD",
    usIDm: "🔐 签名内容结构:",
    hAixz: "参数&&路径&时间戳&sigSec",
    hpqVA: "   签名内容长度:",
    FHQBM: "   签名内容前100字符:",
    Jyjgs: function (j, H) {
      return j === H;
    },
    SycQs: "MgJoa",
    uJdrA: "kmjji",
    WpQGL: "pem",
    QxNVp: "RSA-SHA256",
    zwNTn: "utf8",
    JzWcn: "base64",
    iFSvy: function (j, H) {
      return j !== H;
    },
    uuVIB: "HSaOP",
    GAJnh: "pKehr",
    eHrBT: "❌ 签名生成失败:"
  };
  const t = "/reading/duration/security_report".replace("/api", "");
  const U = F + "&&" + t + "&" + g + "&" + "AAF7JGdkIjwren0kJSN6fys7ImI5I30=";
  if (NI.debugMode) {
    {
      console.log("🔐 签名内容结构:", "参数&&路径&时间戳&sigSec");
      console.log("   签名内容长度:", U.length);
      console.log("   签名内容前100字符:", U.substring(0, 100));
    }
  }
  try {
    {
      const c = {
        key: Y1,
        format: "pem"
      };
      const p = NO.createPrivateKey(c);
      const M = NO.createSign("RSA-SHA256");
      M.update(U, "utf8");
      const o = M.sign(p, "base64");
      return o;
    }
  } catch (G) {
    {
      console.log("❌ 签名生成失败:", G.message);
      return null;
    }
  }
}
function Yz() {
  const N = Y7.getCurrentEpisode();
  const Y = Y7.getCurrentSeries();
  Y7.updateProgress();
  return Y.id + "_" + N;
}
function YJ() {
  const N = Y7.getCurrentSeries();
  return N.id;
}
function Yt() {
  const F = {
    XSTGQ: "💥 未处理的Promise拒绝:",
    UrrVC: function (z, J) {
      return z + J;
    },
    vInig: "📊 时长上报统计摘要",
    ZJxlZ: function (z, J) {
      return z < J;
    },
    eqDJo: function (z, J) {
      return z !== J;
    },
    crzoO: "LGejm",
    LxeQt: "iwSwE",
    szcwp: function (z, J) {
      return z * J;
    },
    DdCqb: function (z, J) {
      return z === J;
    },
    DuAxi: "xaAwV"
  };
  const g = [2, 8, 17, 22];
  if (Math.random() < 0.8) {
    {
      return g[Math.floor(Math.random() * g.length)];
    }
  } else {
    {
      return Math.floor(Math.random() * 29) + 2;
    }
  }
}
async function YU(N) {
  return new Promise(Y => setTimeout(Y, N));
}
async function Yj(N, Y = 3, F = 1000) {
  let z = 0;
  while (z < Y) {
    {
      try {
        {
          return await N();
        }
      } catch (U) {
        {
          z++;
          if (z >= Y) {
            throw U;
          }
          console.log("请求失败，" + F + "ms后重试（剩余" + (Y - z) + "次）");
          await YU(F);
        }
      }
    }
  }
}
async function YH(Y, F) {
  const g = {
    XmSkA: function (z, J) {
      return z + J;
    },
    cyCgW: function (z, J) {
      return z / J;
    },
    NwGkl: function (z, J) {
      return z % J;
    },
    qjzfi: function (z, J) {
      return z === J;
    },
    IqFjN: "🎉 所有视频合集已播放完成，开始新一轮循环播放！",
    WWdIN: function (z, J) {
      return z !== J;
    },
    VxyIs: "ttEtw",
    BDeXZ: "utf8",
    jdwcz: "⚠️ 读取视频进度文件失败，将创建新文件:",
    ALxbY: function (z, J) {
      return z * J;
    },
    yFvdo: "YULLj",
    ZLwuy: "WPiGY",
    LrHnE: function (z) {
      return z();
    },
    vyQjV: function (z) {
      return z();
    },
    QxwDZ: function (z) {
      return z();
    },
    mhrPB: function (z) {
      return z();
    },
    SqAAb: function (z) {
      return z();
    },
    lVubE: "watch",
    MSUZq: "zy8b0c8f",
    OqScO: function (z, J, t) {
      return z(J, t);
    },
    dtrXs: "MZtnG",
    IbIQR: "签名生成失败",
    nzybj: "application/x-www-form-urlencoded",
    adYnd: "theater.bjyikan.cn",
    iLQaV: "Keep-Alive",
    chXIz: "gzip",
    rUXkP: function (z, J) {
      return z !== J;
    },
    LsAxw: "tJCIV",
    hiaCn: "qJcWd",
    WpnNa: function (z, J) {
      return z - J;
    },
    UtGGT: function (z, J) {
      return z === J;
    },
    coiqx: "bcEqq",
    TOiVK: "cgroz",
    qCRSL: "0|1|4|3|2",
    iGbuI: "bTLVa",
    dLjFy: "vidaW",
    XbgYB: function (z, J) {
      return z === J;
    },
    oHSvr: "GTQkj",
    AKvOW: "eKzGa",
    bERwx: function (z, J) {
      return z !== J;
    },
    uvngM: "Ejlyg",
    fzcxz: "ItvTY",
    uXVPs: "bRBFG",
    OKwTq: "业务逻辑错误",
    LyfZE: "CYjgB",
    NlDtW: "NNXtS",
    PhzbI: "fMmRL",
    TcqZX: "ZvDsY",
    DUcjj: function (z, J) {
      return z > J;
    },
    IzgXw: function (z, J) {
      return z * J;
    },
    QNFaB: function (z, J) {
      return z / J;
    },
    jaUJj: function (z, J) {
      return z !== J;
    },
    IdvQA: "WSlcm",
    Jnkrg: "rsmtH",
    nHDPD: "cmdeo",
    IagmN: "OHYgo",
    JfwYD: function (z, J) {
      return z === J;
    },
    sLtmr: "FeuAu"
  };
  try {
    {
      return await Yj(async () => {
        const t = {
          HimDl: function (U, j) {
            return U % j;
          },
          rfZVO: function (U, j) {
            return U + j;
          },
          Igjou: function (U, j) {
            return U === j;
          },
          Sawln: "🎉 所有视频合集已播放完成，开始新一轮循环播放！",
          NIKZz: function (U, j) {
            return U !== j;
          },
          odlEF: "ttEtw",
          wFYva: "utf8",
          jnKXn: "⚠️ 读取视频进度文件失败，将创建新文件:",
          yEAxI: function (U, j) {
            return U + j;
          },
          PJWXJ: function (U, j) {
            return U * j;
          }
        };
        {
          const U = Y8();
          const j = Y9();
          const H = Yz();
          const c = YJ();
          const p = Yt();
          const M = {
            book_id: H,
            date: j,
            res_type: "watch",
            collection_code: c,
            second: p
          };
          const o = [M];
          const G = {
            app_id: "zy8b0c8f",
            date_info: JSON.stringify(o),
            p1: Y.p1,
            p16: Y.taskConfig.p16,
            p2: Y.taskConfig.p2,
            p21: Y.taskConfig.p21,
            p22: Y.taskConfig.p22,
            p24: Y.taskConfig.p24,
            p25: Y.taskConfig.p25,
            p29: Y.taskConfig.p29,
            p3: Y.taskConfig.p3,
            p31: Y.taskConfig.p31,
            p33: Y.taskConfig.p33,
            p34: Y.taskConfig.p34,
            p35: Y.p35,
            p4: Y.taskConfig.p4,
            p5: Y.taskConfig.p5,
            p7: Y.taskConfig.p7,
            p9: Y.taskConfig.p9,
            pc: Y.taskConfig.pc,
            timestamp: U,
            user_name: Y.usr,
            usr: Y.usr,
            zyeid: Y.zyeid,
            zysid: Y.zysid
          };
          const Z = Object.keys(G).sort().reduce((l, r) => {
            {
              l[r] = G[r];
              return l;
            }
          }, {});
          const A = new URLSearchParams(Z).toString();
          const a = Yg(A, U);
          if (!a) {
            {
              console.log("❌ [轮次" + F + "] [" + Y.name + "] 签名生成失败，跳过当前请求");
              const r = {
                success: false,
                error: "签名生成失败"
              };
              return r;
            }
          }
          const K = {
            "User-Agent": Y.taskConfig.userAgent,
            "X-AppId": "zy8b0c8f",
            "X-SIG-Alg": "RSA-SHA256",
            "X-SIG-Ver": "v1.1",
            "X-SIG-Sec": "AAF7JGdkIjwren0kJSN6fys7ImI5I30=",
            "X-SIG-Timestamp": U,
            "X-SIG-Sign": a,
            "Content-Type": "application/x-www-form-urlencoded",
            Host: "theater.bjyikan.cn",
            Connection: "Keep-Alive",
            "Accept-Encoding": "gzip",
            "Content-Length": Buffer.byteLength(A, "utf8").toString()
          };
          console.log("\n📊 [轮次" + F + "] [" + Y.name + "] 时长上报详情：");
          console.log("   视频ID: " + H);
          console.log("   观看时长: " + p + "秒");
          console.log("   上报时间: " + j);
          NI.debugMode && (console.log("🔍 DEBUG - 请求参数:"), console.log("   URL: " + NI.apiUrl), console.log("   Headers: " + JSON.stringify(K, null, 2)), console.log("   Params: " + JSON.stringify(G, null, 2)));
          const P = Date.now();
          const m = {
            rejectUnauthorized: false
          };
          const X = await NC.post(NI.apiUrl, A, {
            headers: K,
            timeout: 15000,
            httpsAgent: new ND.Agent(m),
            validateStatus: C => C >= 200 && C < 500
          });
          const R = Date.now() - P;
          if (NI.debugMode) {
            {
              console.log("🔍 DEBUG - 响应详情:");
              console.log("   状态码: " + X.status);
              console.log("   响应时间: " + R + "ms");
              console.log("   响应头: " + JSON.stringify(X.headers, null, 2));
              console.log("   响应数据: " + JSON.stringify(X.data, null, 2));
            }
          }
          if (X.status === 200) {
            {
              if (X.data && X.data.code === 0) {
                {
                  console.log("✅ [轮次" + F + "] [" + Y.name + "] 时长上报成功 (" + R + "ms)");
                  console.log("   📈 上报结果: 成功 - " + p + "秒时长已记录");
                  const w = {
                    success: true,
                    duration: p,
                    responseTime: R,
                    responseData: X.data
                  };
                  return w;
                }
              } else {
                {
                  console.log("❌ [轮次" + F + "] [" + Y.name + "] 时长上报失败 (业务错误)");
                  console.log("   ⚠️ 业务状态码: " + (X.data?.["code"] || "未知"));
                  X.data && console.log("      错误信息: " + JSON.stringify(X.data));
                  const b = {
                    success: false,
                    duration: p,
                    responseTime: R,
                    responseData: X.data,
                    error: "业务逻辑错误"
                  };
                  return b;
                }
              }
            }
          } else {
            {
              console.log("❌ [轮次" + F + "] [" + Y.name + "] 时长上报失败 (状态码: " + X.status + ")");
              if (NI.debugMode) {
                {
                  console.log("   🔍 详细错误信息:");
                  console.log("      响应数据: " + JSON.stringify(X.data));
                }
              }
              const h = {
                success: false,
                duration: p,
                responseTime: R,
                error: "HTTP " + X.status,
                responseData: X.data
              };
              return h;
            }
          }
        }
      }, NI.maxFailedAttempts);
    }
  } catch (J) {
    {
      console.log("💥 [轮次" + F + "] [" + Y.name + "] 时长上报异常: " + J.message);
      if (NI.debugMode) {
        {
          console.log("   🔍 异常详情:");
          console.log("      错误堆栈: " + J.stack);
        }
      }
      const t = {
        success: false,
        duration: 0,
        responseTime: 0,
        error: J.message
      };
      return t;
    }
  }
}
class Yc {
  constructor() {
    this.totalReports = 0;
    this.successfulReports = 0;
    this.failedReports = 0;
    this.totalDuration = 0;
    this.responseTimes = [];
  }
  addReport(Y) {
    const g = {
      paLmL: "❌ 未找到SKSC环境变量，请检查配置",
      NDMun: "❌ 未找到有效的账号URL，请检查SKSC环境变量格式",
      rpbnD: "⚠️ 读取视频进度文件失败，将创建新文件:",
      qCSMo: function (z, J) {
        return z !== J;
      },
      HPzwb: "RfuCX",
      qokIo: "NkSRk",
      yMLCQ: "rTabV",
      gVgkm: function (z, J) {
        return z > J;
      },
      BEXBg: function (z, J) {
        return z === J;
      },
      XCcqK: "SuYBJ",
      EibNm: "ZuoXU"
    };
    this.totalReports++;
    if (Y.success) {
      {
        this.successfulReports++;
        this.totalDuration += Y.duration;
      }
    } else {
      {
        this.failedReports++;
      }
    }
    Y.responseTime > 0 && this.responseTimes.push(Y.responseTime);
  }
  getStats() {
    const z = this.responseTimes.length > 0 ? Math.round(this.responseTimes.reduce((U, j) => U + j, 0) / this.responseTimes.length) : 0;
    const J = this.totalReports > 0 ? Math.round(this.successfulReports / this.totalReports * 100) : 0;
    const t = {
      totalReports: this.totalReports,
      successfulReports: this.successfulReports,
      failedReports: this.failedReports,
      successRate: J,
      totalDuration: this.totalDuration,
      avgResponseTime: z
    };
    return t;
  }
  printSummary() {
    const g = this.getStats();
    console.log("\n" + "=".repeat(60));
    console.log("📊 时长上报统计摘要");
    console.log("=".repeat(60));
    console.log("总上报次数: " + g.totalReports);
    console.log("成功次数: " + g.successfulReports);
    console.log("失败次数: " + g.failedReports);
    console.log("成功率: " + g.successRate + "%");
    console.log("总上报时长: " + g.totalDuration + "秒");
    console.log("平均响应时间: " + g.avgResponseTime + "ms");
    console.log("=".repeat(60));
  }
}
async function Yp() {
  const Y = {
    BUZWl: "(((.+)+)+)+$",
    STXlj: "4|2|3|1|0",
    UjapN: "💥 脚本执行失败:",
    yBepV: function (t) {
      return t();
    },
    UejpC: function (t, U) {
      return t === U;
    },
    EpEeH: "dtEYW",
    qHrej: "GzMgs",
    ppecX: function (t, U) {
      return t + U;
    },
    AbyFJ: "业务逻辑错误",
    PobIQ: "pem",
    OjOcX: "RSA-SHA256",
    mYdtr: "utf8",
    CQYir: "base64",
    NBzKX: function (t, U) {
      return t > U;
    },
    LcLaH: "http",
    nwgVS: "⚠️ 保存视频进度文件失败:",
    pGpyh: "\n========================================",
    BBAHi: "神秘代码：1067957630",
    rNJOU: "========================================\n",
    FtQbA: "🚀 开始执行时长上报脚本...",
    Qutbx: "\n📺 视频合集进度:",
    ohlrj: function (t, U) {
      return t !== U;
    },
    vSles: "yLAxg",
    JrSrm: "hoUbM",
    pybaO: "LEAYh",
    GdDbB: "acMzT",
    AJOrq: "DqblK",
    PEfxD: "wUGOc",
    pQTpv: "cpuoD",
    qbDkb: function (t, U) {
      return t > U;
    },
    Ciydo: function (t, U) {
      return t !== U;
    },
    gXxsY: "uqKNj",
    IBPiF: "SiDXl",
    nEsyJ: "SGoyJ",
    uLKGs: "AcArw",
    JpgzX: "❌ 未找到有效账号配置，请检查SKSC环境变量",
    alAee: function (t, U) {
      return t < U;
    },
    nAlcf: function (t, U) {
      return t !== U;
    },
    qPLaR: "SfXPa",
    CgRlQ: "lfdHm",
    nmmjA: function (t, U) {
      return t <= U;
    },
    UBXGW: "XGDfF",
    UAFJW: function (t, U, j) {
      return t(U, j);
    },
    FMlTz: function (t, U) {
      return t / U;
    },
    FHlrs: function (t, U) {
      return t >= U;
    },
    VzkPH: function (t, U) {
      return t === U;
    },
    qXHZz: "IAPNr",
    geJWB: "TwXtp",
    pNKhV: "3|4|2|1|0",
    MKJdQ: "\n🎉 时长上报脚本执行完成（自动停止）",
    cjJHZ: function (t, U) {
      return t === U;
    },
    NXFSc: function (t, U) {
      return t % U;
    },
    acrrG: "ozQIr",
    ZhIpL: "Qqnhp",
    hoqQn: function (t, U) {
      return t / U;
    },
    byMxl: function (t, U) {
      return t !== U;
    },
    MCaLD: "bwFdS",
    GYtrj: function (t, U) {
      return t(U);
    },
    vFqZq: function (t, U) {
      return t / U;
    },
    bjCmH: "INQcd",
    kwJFe: "1|0|3|4|2",
    TQnMO: "\n🎉 时长上报脚本执行完成"
  };
  console.log("\n========================================");
  console.log("神秘代码：1067957630");
  console.log("========================================\n");
  console.log("🚀 开始执行时长上报脚本...");
  console.log("配置信息: " + NI.loopCount + "轮次, " + NI.reportInterval + "ms间隔");
  const g = {
    minMinutes: 310,
    maxMinutes: 330,
    checkInterval: 10
  };
  console.log("⏰ 时长检测: " + g.minMinutes + "-" + g.maxMinutes + "分钟自动停止");
  const z = Y7.getProgressInfo();
  console.log("\n📺 视频合集进度:");
  console.log("   当前合集: " + z.currentSeries.name + " (" + z.currentSeries.id + ")");
  console.log("   当前集数: " + z.currentEpisode + "/" + z.totalEpisodes);
  console.log("   当前集数上报进度: " + z.currentEpisodeReportCount + "/" + z.reportsPerEpisode + "次");
  console.log("   循环播放次数: " + z.loopCount + "次");
  console.log("   总合集数: " + z.totalSeries);
  console.log("   总执行次数: " + z.totalExecutions);
  z.lastExecutionTime && console.log("   上次执行: " + z.lastExecutionTime);
  if (z.isCurrentSeriesCompleted) {
    {
      console.log("   当前合集状态: ✅ 已完成");
    }
  } else {
    {
      console.log("   当前合集状态: 🔄 播放中");
    }
  }
  if (z.areAllSeriesCompleted) {
    {
      console.log("   所有合集状态: 🎉 已完成一轮循环");
    }
  }
  if (z.seriesHistory.length > 0) {
    {
      console.log("\n📋 合集播放历史:");
      z.seriesHistory.forEach((c, p) => {
        {
          console.log("   " + (p + 1) + ". " + c.seriesName + " (" + c.seriesId + ") - 完成于: " + c.completedAt);
        }
      });
    }
  }
  if (Y4.length === 0) {
    {
      console.log("❌ 未找到有效账号配置，请检查SKSC环境变量");
      return;
    }
  }
  console.log("📋 检测到 " + Y4.length + " 个账号");
  const J = new Yc();
  for (let M = 0; M < Y4.length; M++) {
    {
      const o = Y4[M];
      console.log("\n👤 开始处理账号: " + o.name);
      for (let Z = 1; Z <= NI.loopCount; Z++) {
        {
          const A = await YH(o, Z);
          J.addReport(A);
          const a = Math.floor(J.totalDuration / 60);
          if (a >= g.minMinutes && a <= g.maxMinutes) {
            {
              console.log("\n🎯 检测到累计时长: " + a + "分钟");
              console.log("✅ 已达到目标时长范围 " + g.minMinutes + "-" + g.maxMinutes + "分钟，自动停止");
              J.printSummary();
              console.log("\n🎉 时长上报脚本执行完成（自动停止）");
              return;
            }
          }
          if (Z % 5 === 0) {
            {
              const R = Math.floor(J.totalDuration / 60);
              console.log("📊 当前进度: " + R + "分钟 (" + J.totalDuration + "秒)");
            }
          }
          Z < NI.loopCount && (await YU(NI.reportInterval));
        }
      }
      console.log("✅ " + o.name + " 上报完成");
      const G = Math.floor(J.totalDuration / 60);
      if (G >= g.minMinutes && G <= g.maxMinutes) {
        {
          console.log("\n🎯 检测到累计时长: " + G + "分钟");
          console.log("✅ 已达到目标时长范围 " + g.minMinutes + "-" + g.maxMinutes + "分钟，自动停止");
          J.printSummary();
          console.log("\n🎉 时长上报脚本执行完成（自动停止）");
          return;
        }
      }
    }
  }
  J.printSummary();
  console.log("\n🎉 时长上报脚本执行完成");
}
process.on("unhandledRejection", (Y, F) => {
  console.log("💥 未处理的Promise拒绝:", Y);
});
process.on("uncaughtException", Y => {
  console.log("💥 未捕获的异常:", Y);
});
require.main === module && Yp().catch(Y => {
  console.log("💥 脚本执行失败:", Y);
  process.exit(1);
});
const YM = {
  reportDuration: YH,
  Statistics: Yc,
  DURATION_REPORT_CONFIG: NI
};
module.exports = YM;