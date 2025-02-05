declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    'bc-widget-schedules': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      // Aqui, se quiser, você pode definir quais props
      // (atributos) esse web component espera.
      'profile-slug'?: string;
      layout?: string;
    };
  }
}