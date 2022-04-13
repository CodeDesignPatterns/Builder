package code_design_patterns.java;

public class Taco {

  private final String meat;
  private final String cheese;
  private final String shell;
  private final boolean vegan;
  private final boolean salad;

  private Taco(TacoBuilder builder) {
    this.meat = builder.meat;
    this.cheese = builder.cheese;
    this.shell = builder.shell;
    this.vegan = builder.vegan;
    this.salad = builder.salad;
  }

  public String getMeat() {
    return meat;
  }

  public String getCheese() {
    return cheese;
  }

  public String getShell() {
    return shell;
  }

  public boolean getVegan() {
    return vegan;
  }

  public boolean getSalad() {
    return salad;
  }

  @Override
  public String toString() {
    return "Taco{" +
            "meat='" + meat + '\'' +
            ", cheese='" + cheese + '\'' +
            ", shell='" + shell + '\'' +
            ", vegan=" + vegan +
            ", salad=" + salad +
            '}';
  }

  public static class TacoBuilder {
    private String meat;
    private String cheese;
    private String shell;
    private boolean vegan;
    private boolean salad;

    public TacoBuilder meat(String meat) {
      this.meat = meat;
      return this;
    }
    public TacoBuilder cheese(String cheese) {
      this.cheese = cheese;
      return this;
    }

    public TacoBuilder shell(String shell) {
      this.shell = shell;
      return this;
    }

    public TacoBuilder vegan(boolean vegan) {
      this.vegan = vegan;
      return this;
    }

    public TacoBuilder salad(boolean salad) {
      this.salad = salad;
      return this;
    }

    public Taco build(){
      Taco taco = new Taco(this);
      return taco;
    }

  }
}
