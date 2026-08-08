declare module 'gsap' {
  export const gsap: {
    timeline: (params?: any) => any;
    to: (targets: any, vars: any) => any;
    set: (targets: any, vars: any) => any;
    from: (targets: any, vars: any) => any;
    fromTo: (targets: any, fromVars: any, toVars: any) => any;
    // Add other GSAP methods as needed
  };
  
  export default gsap;
} 